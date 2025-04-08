/*
Leetcode question 1431
https://leetcode.com/problems/kids-with-the-greatest-number-of-candies
 */

/**
 *
 * @param candies
 * @param extraCandies
 * @output boolean[]
 */
const kidsWithCandies = (
  candies: number[],
  extraCandies: number,
): boolean[] => {
  const highestCandyCount = Math.max(...candies);
  return candies.map(
    (candyCount: number) => candyCount + extraCandies >= highestCandyCount,
  );
};

export default kidsWithCandies;
