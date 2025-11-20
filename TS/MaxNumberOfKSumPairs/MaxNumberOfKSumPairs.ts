function maxOperations(nums: number[], k: number): number {
  const numsObj: { [index: number]: number } = nums.reduce(
    (acc: { [index: number]: number }, curr: number) => {
      if (!acc[curr]) {
        acc[curr] = 1;
      } else {
        acc[curr] += 1;
      }
      return acc;
    },
    {},
  );

  let operationCount = 0;

  Object.keys(numsObj).forEach((numString: string) => {
    const num = parseInt(numString);
    const difference = k - num;
    const isNumEqualToDifference = num === difference;
    if (
      isNumEqualToDifference
        ? numsObj[difference] >= 2
        : numsObj[difference] >= 1
    ) {
      const minOfNumAndDifference = Math.min(numsObj[num], numsObj[difference]);
      if (isNumEqualToDifference) {
        numsObj[num] -= Math.ceil(minOfNumAndDifference / 2);
        operationCount += Math.floor(minOfNumAndDifference / 2);
      } else {
        numsObj[difference] -= minOfNumAndDifference;
        numsObj[num] -= minOfNumAndDifference;
        operationCount += minOfNumAndDifference;
      }
      if (numsObj[num] === 0 || numsObj[difference] === 0) {
        delete numsObj[num];
        delete numsObj[num];
      }
    }
  });

  return operationCount;
}
export default maxOperations;
