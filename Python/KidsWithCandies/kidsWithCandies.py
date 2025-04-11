def higherThanHighestCandyCount(currentCandies: int, extraCandies: int, highestCandyCount: int) -> bool:
    return currentCandies + extraCandies >= highestCandyCount

class Solution:    
    def kidsWithCandies(self, candies: List[int], extraCandies: int) -> List[bool]:
        highestCandyCount = max(candies)
        higherThanHighest = [higherThanHighestCandyCount(currentCandies, extraCandies, highestCandyCount) for _, currentCandies in enumerate(candies)]
        return higherThanHighest