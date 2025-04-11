class Solution {
    public String mergeAlternately(String word1, String word2) {
        int word1Length = word1.length();
        int word2Length = word2.length();
        StringBuilder mergedString = new StringBuilder(word1Length + word2Length);
        for(int i = 0; i < Math.max(word1Length, word2Length); i++) {
            if (word1Length > i) {
                mergedString.append(word1.charAt(i));
            }
            if (word2.length() > i) {
                mergedString.append(word2.charAt(i));
            }
        }
        return mergedString.toString();
    }  
}