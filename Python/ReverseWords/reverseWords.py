class Solution:
    def reverseWords(self, s: str) -> str:
        reversedWords = []
        for word in reversed([word.strip() for word in s.split(" ")]):
            if word != "":
                reversedWords.append(word)
        return " ".join(reversedWords)
