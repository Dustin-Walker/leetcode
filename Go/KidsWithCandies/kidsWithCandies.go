package main

func max(arr []int) int {
	if len(arr) == 0 {
		return 0
	}

	max := arr[0]
	for _, num := range arr {
		if num > max {
			max = num
		}
	}
	return max
}

func kidsWithCandies(candies []int, extraCandies int) []bool {
	highestCandyCount := max(candies)
	// If the candies[i] + extraCandies > highestCandyCount,
	// they are higher than the highest candy count
	candiesSize := len(candies)
	higherThanHighestCandyCount := make([]bool, candiesSize)
	for i := 0; i < candiesSize; i++ {
		higherThanHighestCandyCount[i] = candies[i]+extraCandies >= highestCandyCount
	}
	return higherThanHighestCandyCount
}