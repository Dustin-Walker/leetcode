// https://leetcode.com/problems/lexicographical-numbers/?envType=daily-question&envId=2024-09-21
function findNumberOfDigits(n: number): number {
  if (n < 10) {
    return 1;
  }
  if (n < 100) {
    return 2;
  }
  if (n < 1000) {
    return 3;
  }
  if (n < 10000) {
    return 4;
  }
  if (n < 1000000) {
    return 5;
  }
  return -1;
}

function lexicalOrder(n: number): number[] {
  const arrayOfArrays: [][] = [];
  for (let i = 1; i <= 9; i++) {
    arrayOfArrays[i] = [];
  }
  for (let i = 1; i <= n; i++) {
    // Find total number of digits - 1
    const digits = findNumberOfDigits(i);

    // Find first digit
    const firstDigit = Math.floor(i / Math.pow(10, digits - 1));
    // @ts-ignore
    arrayOfArrays[firstDigit].push(i);
  }
  return arrayOfArrays.flat();
}

export function lexicalOrderString(n: number): number[] {
  let stringArray: string[] = [];
  for (let i = 1; i <= n; i++) {
    const iString = i.toString();
    stringArray.push(iString);
  }
  stringArray.sort();
  return stringArray.map((iString) => parseInt(iString));
}

export default lexicalOrder;
