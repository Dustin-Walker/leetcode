// https://leetcode.com/problems/increment-submatrices-by-one/

function rangeAddQueries(n: number, queries: number[][]): number[][] {
  const matrix = new Array(n)
    .fill(0)
    .map((columnArray) => new Array(n).fill(0));

  queries.forEach(([upperLeftY, upperLeftX, lowerRightY, lowerRightX]) => {
    for (let row = upperLeftY; row <= lowerRightY; row++) {
      for (let col = upperLeftX; col <= lowerRightX; col++) {
        matrix[row][col] += 1;
      }
    }
  });

  return matrix;
}

export default rangeAddQueries;
