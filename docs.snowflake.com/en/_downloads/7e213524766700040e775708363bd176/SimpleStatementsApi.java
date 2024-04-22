/*
 * Copyright (c) 2022 Snowflake Computing Inc. All rights reserved.
 *
 * This example is intended for use as a reference only.
 * Do not use this code in production applications or environments.
 */

package com.snowflake.example;

// See https://auth0.com/docs/libraries
import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
// See https://swagger.io/tools/swagger-codegen/download/
import io.swagger.client.ApiClient;
import io.swagger.client.ApiException;
import io.swagger.client.ApiResponse;
import io.swagger.client.JSON;
import io.swagger.client.api.StatementsApi;
import io.swagger.client.model.CancelStatus;
import io.swagger.client.model.ResultSet;
import io.swagger.client.model.V2StatementsBody;
import java.io.File;
import java.nio.charset.Charset;
import java.nio.file.Files;
import java.security.KeyFactory;
import java.security.MessageDigest;
import java.security.interfaces.RSAPrivateCrtKey;
import java.security.interfaces.RSAPublicKey;
import java.security.spec.PKCS8EncodedKeySpec;
import java.security.spec.RSAPublicKeySpec;
import java.util.*;
import java.util.concurrent.ThreadLocalRandom;
import java.util.concurrent.TimeUnit;

/** A simple wrapper of ApiStatements. */
public class SimpleStatementsApi extends StatementsApi {
  /** Accept value for SQL API */
  public static final String SNOWFLAKE_ACCEPT = "application/json";

  /** User Agent for SQL API */
  public static final String SNOWFLAKE_USER_AGENT = "testApp/1.0";

  /** HTTP header - X-SNOWFLAKE-AUTHORIZATION-TOKEN-TYPE */
  public static final String X_SNOWFLAKE_AUTHORIZATION_TOKEN_TYPE = "KEYPAIR_JWT";

  /** Maximum number of retry */
  public static final int MAX_RETRY = 5;

  /**
   * Decorrelated Jitter backoff
   *
   * <p>https://aws.amazon.com/blogs/architecture/exponential-backoff-and-jitter/
   */
  public static class DecorrelatedJitterBackoff {
    public static final long MINIMUM_BACKOFF = 1;
    public static final long MAXIMUM_BACKOFF = 16;
    private final long base;
    private final long cap;
    private long next;

    /** Initializes the backoff duration */
    public DecorrelatedJitterBackoff() {
      this(TimeUnit.SECONDS.toMillis(MINIMUM_BACKOFF), TimeUnit.SECONDS.toMillis(MAXIMUM_BACKOFF));
    }

    /**
     * Initializes the backoff duration
     *
     * @param base the minimum backoff duration
     * @param cap the maximum backoff duration
     */
    public DecorrelatedJitterBackoff(long base, long cap) {
      this.base = base;
      this.cap = cap;
      this.next = base;
    }

    /**
     * Returns the next sleep time
     *
     * @return the next steep time in milliseconds
     */
    public long nextSleepTime() {
      final long current = next;
      next = Math.min(cap, ThreadLocalRandom.current().nextLong(base, next * 3));
      return current;
    }
  }

  /** Parameters */
  private final Parameters parameters;

  /**
   * Initializes the StatementsApi with the connection parameters
   *
   * @param parameters connection parameters
   * @throws Exception arises if any error occurs
   */
  public SimpleStatementsApi(Parameters parameters) throws Exception {
    super();
    this.parameters = parameters;
    setApiClient(createApiClient());
  }

  /**
   * Wrapper of submitStatementWithHttpInfo
   *
   * @param body the payload including statements and parameters
   * @param requestId requestId
   * @param async true if async otherwise false
   * @param nullable true if the return value null will changes to 'null' otherwise null.
   * @return ApiResponse instance
   * @throws Exception arises if any error occurs
   */
  public ApiResponse<ResultSet> submitStatement(
      V2StatementsBody body, UUID requestId, Boolean async, Boolean nullable) throws Exception {
    return super.submitStatementWithHttpInfo(
        body,
        SNOWFLAKE_USER_AGENT,
        SNOWFLAKE_ACCEPT,
        X_SNOWFLAKE_AUTHORIZATION_TOKEN_TYPE,
        requestId,
        async,
        nullable);
  }

  /**
   * Wrapper of getStatementStatusWithHttpInfo
   *
   * @param statementHandle statement handle
   * @param requestId requestId
   * @param partition partition index number
   * @return ApiResponse<ResultSet> instance
   * @throws Exception arises if any error occurs
   */
  public ApiResponse<ResultSet> getStatementStatus(
      UUID statementHandle, UUID requestId, Long partition) throws Exception {
    var backoff = new DecorrelatedJitterBackoff();
    Exception currentException = null;
    for (int retry = 0; retry < MAX_RETRY; ++retry) {
      try {
        return super.getStatementStatusWithHttpInfo(
            statementHandle,
            SNOWFLAKE_USER_AGENT,
            requestId,
            partition,
            SNOWFLAKE_ACCEPT,
            X_SNOWFLAKE_AUTHORIZATION_TOKEN_TYPE);
      } catch (ApiException ex) {
        currentException = ex;
        ResultSet res = new JSON().deserialize(ex.getResponseBody(), ResultSet.class);
        if (!"000709".equals(res.getCode())) {
          // statement is not available error can occur if the statement is checked too early before
          // the GS starts recognizing it.
          throw ex;
        }
        Thread.sleep(backoff.nextSleepTime());
      }
    }
    throw currentException;
  }

  /**
   * Wrapper of cancelStatementWithHttpInfo
   *
   * @param statementHandle statement handle
   * @param requestId requestId
   * @return ApiResponse<CancelStatus>
   * @throws Exception arises if any error occurs
   */
  public ApiResponse<CancelStatus> cancelStatement(UUID statementHandle, UUID requestId)
      throws Exception {
    return super.cancelStatementWithHttpInfo(
        statementHandle,
        SNOWFLAKE_USER_AGENT,
        requestId,
        SNOWFLAKE_ACCEPT,
        X_SNOWFLAKE_AUTHORIZATION_TOKEN_TYPE);
  }

  /**
   * Gets a page for the page number and size. This is a reference implementation of pagination
   * feature, which native support was dropped from the private preview v2. This code is useful to
   * fill the need if the application requires the pagination.
   *
   * @param resultSet ResultSet instance
   * @param page page number, starting with zero.
   * @param pageSize page size.
   * @return a list of list string result set.
   * @throws Exception arises if any unexpected error occurs
   */
  public List<List<String>> getPageWithPageSize(ResultSet resultSet, long page, long pageSize)
      throws Exception {
    final var statementHandle = resultSet.getStatementHandle();
    final var partitionInfo = resultSet.getResultSetMetaData().getPartitionInfo();
    var partitionCounter = 0;
    var startOffset = page * pageSize;

    // skip to the beginning of the data
    while (partitionCounter < partitionInfo.size()
        && partitionInfo.get(partitionCounter).getRowCount() <= startOffset) {
      startOffset -= partitionInfo.get(partitionCounter).getRowCount();
      partitionCounter++;
    }

    if (partitionCounter == partitionInfo.size() || startOffset < 0) {
      throw new Exception("too large page number");
    }

    List<List<String>> result = new ArrayList<>();
    do {
      var resultSetResponse = getStatementStatus(statementHandle, null, (long) partitionCounter);
      var rowCount = partitionInfo.get(partitionCounter).getRowCount() - startOffset;
      while (pageSize > 0 && rowCount > 0) {
        result.add(resultSetResponse.getData().getData().get((int) startOffset));
        --pageSize;
        --rowCount;
        ++startOffset;
      }
      partitionCounter++;
      startOffset = 0;
    } while (pageSize > 0 && partitionCounter < partitionInfo.size());

    return result;
  }

  /**
   * Creates ApiClient
   *
   * @return ApiClient instance
   * @throws Exception arises if any error occurs
   */
  private ApiClient createApiClient() throws Exception {
    var workspaceDir = System.getenv("WORKSPACE");
    if (workspaceDir == null) {
      workspaceDir = "/tmp";
    }
    var privateKeyFile = new File(workspaceDir, TestHelper.getPrivateKeyFile(parameters));
    if (!privateKeyFile.exists()) {
      throw new Exception(
          "Private key doesn't exist. Run setup.sh to generate the key files. File="
              + privateKeyFile);
    }
    String jwt = generateJWT(parameters, privateKeyFile);

    var apiClient = new ApiClient();
    apiClient.setBasePath(
        parameters.getProtocol() + "://" + parameters.getHost() + ":" + parameters.getPort());
    apiClient.addDefaultHeader("Authorization", "Bearer " + jwt);

    var httpClient = apiClient.getHttpClient();
    httpClient.setConnectTimeout(60, TimeUnit.SECONDS);
    httpClient.setReadTimeout(60, TimeUnit.SECONDS);
    apiClient.setDebugging(true);
    return apiClient;
  }

  /**
   * Generates a JWT for Snowflake Authentication
   *
   * @param parameters a connection parameter instance
   * @param privateKeyFile a private key file
   * @return a JWT for Snowflake Keypair authentication
   * @throws Exception arises if any error occurs
   */
  public static String generateJWT(Parameters parameters, File privateKeyFile) throws Exception {
    var privateKey = readPrivateKey(privateKeyFile);
    RSAPublicKeySpec publicKeySpec =
        new RSAPublicKeySpec(privateKey.getModulus(), privateKey.getPublicExponent());
    KeyFactory keyFactory = KeyFactory.getInstance("RSA");
    RSAPublicKey publicKey = (RSAPublicKey) keyFactory.generatePublic(publicKeySpec);
    Algorithm algorithm = Algorithm.RSA256(publicKey, privateKey);

    var qualifiedUserName =
        parameters.getAccount().toUpperCase(Locale.ROOT)
            + "."
            + parameters.getUser().toUpperCase(Locale.ROOT);

    MessageDigest digest = MessageDigest.getInstance("SHA-256");
    var publicKeyFp =
        "SHA256:" + Base64.getEncoder().encodeToString(digest.digest(publicKey.getEncoded()));

    var issuedTs = new Date();
    var expiresTs = new Date(issuedTs.getTime() + TimeUnit.HOURS.toMillis(1));
    return JWT.create()
        .withIssuer(qualifiedUserName + "." + publicKeyFp)
        .withSubject(qualifiedUserName)
        .withIssuedAt(issuedTs)
        .withExpiresAt(expiresTs)
        .sign(algorithm);
  }

  /**
   * Creates a RSA private key from a P8 file
   *
   * @param file a private key P8 file
   * @return RSAPrivateCrtKey instance
   * @throws Exception arises if any error occurs
   */
  private static RSAPrivateCrtKey readPrivateKey(File file) throws Exception {
    String key = Files.readString(file.toPath(), Charset.defaultCharset());

    String privateKeyPEM =
        key.replace("-----BEGIN PRIVATE KEY-----", "") // pragma: allowlist secret
            .replaceAll(System.lineSeparator(), "")
            .replace("-----END PRIVATE KEY-----", "");

    byte[] encoded = Base64.getDecoder().decode(privateKeyPEM);

    KeyFactory keyFactory = KeyFactory.getInstance("RSA");
    PKCS8EncodedKeySpec keySpec = new PKCS8EncodedKeySpec(encoded);
    return (RSAPrivateCrtKey) keyFactory.generatePrivate(keySpec);
  }
}
