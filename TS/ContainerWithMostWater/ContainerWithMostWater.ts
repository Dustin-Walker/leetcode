// https://leetcode.com/problems/container-with-most-water

/**
 * You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
 *
 * Find two lines that together with the x-axis form a container, such that the container contains the most water.
 *
 * Return the maximum amount of water a container can store.
 *
 * Notice that you may not slant the container.
 * @param height
 */
function maxArea(height: number[]): number {
  let greatestFoundArea = 0;
  for (let iL = 0, iR = height.length - 1; iL <= iR; ) {
    const lHeight = height[iL];
    const rHeight = height[iR];
    const area = Math.min(lHeight, rHeight) * (iR - iL);
    if (area > greatestFoundArea) {
      greatestFoundArea = area;
    }
    lHeight < rHeight ? (iL += 1) : (iR -= 1);
  }
  return greatestFoundArea;
}

export default maxArea;
