import argparse
from bs4 import BeautifulSoup


def extract_preformatted_text(filename):
  """
  Extracts preformatted text from the given HTML file.

  Args:
      filename: Path to the HTML file.

  Returns:
      A list of strings containing the preformatted text elements.
  """
  preformatted_text = []
  with open(filename, 'r') as f:
    soup = BeautifulSoup(f, 'html.parser')
  for pre in soup.find_all('pre'):
    preformatted_text.append(pre.get_text(strip=False))
  return preformatted_text


def main():
  parser = argparse.ArgumentParser(description='Extract preformatted text from HTML')
  parser.add_argument('filename', type=str, help='Path to the HTML file')
  args = parser.parse_args()

  preformatted_text = extract_preformatted_text(args.filename)

  if preformatted_text:
    print("Extracted preformatted text:")
    for text in preformatted_text:
      print(text)
  else:
    print("No preformatted text found in the file.")


if __name__ == '__main__':
  main()
