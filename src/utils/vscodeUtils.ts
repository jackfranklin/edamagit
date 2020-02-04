import { TextDocument, Range, Position } from "vscode";

export default class VSCodeUtils {

  public static rangesOfWordInDocument(textDocument: TextDocument, word?: string): Range[] {
    if (!word) {
      return [];
    }
    const re = new RegExp(' ' + word, 'gi');

    const results = [];
    while (re.exec(textDocument.getText())) {
      const endPos = textDocument.positionAt(re.lastIndex);
      results.push(new Range(new Position(endPos.line, endPos.character - word.length), endPos));
    }

    return results;
  }

}