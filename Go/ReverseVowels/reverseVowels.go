package main

import (
	"strings"
)

func swapChars(runes []rune, i, j int) []rune {
	tmp := runes[i]
	runes[i] = runes[j]
	runes[j] = tmp
	return runes
}

func reverseVowels(s string) string {
    vowelIndexes := []int{}
	for index, rune := range s {
		if strings.ContainsRune("aeiouAEIOU", rune) {
			vowelIndexes = append(vowelIndexes, index)
		}
	}
	runes := []rune(s)
	for i := 0; i < (len(vowelIndexes) / 2); i++ {
		runes = swapChars(runes, vowelIndexes[i], vowelIndexes[len(vowelIndexes) - 1 - i])
	}
	return string(runes)
}