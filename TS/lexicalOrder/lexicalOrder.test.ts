import { lexicalOrderString as lexicalOrder } from "./lexicalOrder";

describe("lexicalOrder", () => {
  test("case 1", () => {
    const n = 13;
    const output = [1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(lexicalOrder(13)).toStrictEqual(output);
  });
  test("case 2", () => {
    const n = 2;
    const output = [1, 2];
    expect(lexicalOrder(2)).toStrictEqual(output);
  });
});
