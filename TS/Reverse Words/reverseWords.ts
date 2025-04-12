function reverseWords(s: string): string {
    return s
            .split(' ')
            .map((word) => word.trim())
            .filter((word) => word.length > 0)
            .reverse()
            .join(" ");
};