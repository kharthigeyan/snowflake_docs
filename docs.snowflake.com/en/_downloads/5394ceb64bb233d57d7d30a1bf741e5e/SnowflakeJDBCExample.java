/*
 * Copyright (c) 2012-2019 Snowflake Inc. All rights reserved.
 *
 * - Download the latest version of the driver (snowflake-jdbc-<ver>.jar) from Maven:
 *       https://repo1.maven.org/maven2/net/snowflake/snowflake-jdbc/<ver>
 * - Download this file (SnowflakeJDBCExample.java) into the same directory.
 * - Edit this file (SnowflakeJDBCExample.java) and set the connection properties correctly.
 * - From the command line, run:
 *     javac SnowflakeJDBCExample.java
 * - From the command line, run:
 *   - Linux/macOS:
 *     java -cp .:snowflake-jdbc-<ver>.jar SnowflakeJDBCExample
 *   - Windows:
 *     java -cp .;snowflake-jdbc-<ver>.jar SnowflakeJDBCExample
 *
 */

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Properties;

public class SnowflakeJDBCExample {

  public static void main(String[] args) throws Exception {
    // get connection
    System.out.println("Create JDBC connection");
    Connection connection = getConnection();
    System.out.println("Done creating JDBC connection\n");

    // create statement
    System.out.println("Create JDBC statement");
    Statement statement = connection.createStatement();
    System.out.println("Done creating JDBC statement\n");

    // create a table
    System.out.println("Create demo table");
    statement.executeUpdate("create or replace table demo(c1 string)");
    System.out.println("Done creating demo table\n");

    // insert a row
    System.out.println("Insert 'hello world'");
    statement.executeUpdate("insert into demo values ('hello world')");
    System.out.println("Done inserting 'hello world'\n");

    // query the data
    System.out.println("Query demo");
    ResultSet resultSet = statement.executeQuery("select * from demo");
    System.out.println("Metadata:");
    System.out.println("================================");

    // fetch metadata
    ResultSetMetaData resultSetMetaData = resultSet.getMetaData();
    System.out.println("Number of columns=" + resultSetMetaData.getColumnCount());
    for (int colIdx = 0; colIdx < resultSetMetaData.getColumnCount(); colIdx++) {
      System.out.println(
          "Column " + colIdx + ": type=" + resultSetMetaData.getColumnTypeName(colIdx + 1));
    }

    // fetch data
    System.out.println("\nData:");
    System.out.println("================================");
    int rowIdx = 0;
    while (resultSet.next()) {
      System.out.println("row " + rowIdx + ", column 0: " + resultSet.getString(1));
    }
    resultSet.close();
    statement.close();
    connection.close();
  }

  private static Connection getConnection() throws SQLException {

    // build connection properties
    Properties properties = new Properties();
    properties.put("user", ""); // replace "" with your user name
    properties.put("password", ""); // replace "" with your password
    properties.put("warehouse", ""); // replace "" with target warehouse name
    properties.put("db", ""); // replace "" with target database name
    properties.put("schema", ""); // replace "" with target schema name
    // properties.put("tracing", "all"); // optional tracing property

    // Replace <account_identifier> with your account identifier. See
    // https://docs.snowflake.com/en/user-guide/admin-account-identifier.html
    // for details.
    String connectStr = "jdbc:snowflake://<account_identifier>.snowflakecomputing.com";
    return DriverManager.getConnection(connectStr, properties);
  }
}
