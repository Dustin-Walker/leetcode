package Java.CanPlaceFlowers;

class Solution {
    public boolean canPlaceFlowers(int[] flowerbed, int n) {
        int consecutiveBedsWithoutFlowers = 1;
        int flowersCanBePlanted = 0;
        for(int i = 0; i < flowerbed.length; i++) {
            int hasFlower = flowerbed[i];
            if (hasFlower == 0) {
                consecutiveBedsWithoutFlowers += 1;
                if (i == flowerbed.length - 1) {
                    int availableSpaces = (consecutiveBedsWithoutFlowers) / 2;
                    flowersCanBePlanted += availableSpaces;
                }
            } else {
                int availableSpaces = (consecutiveBedsWithoutFlowers - 1) / 2;
                flowersCanBePlanted += availableSpaces;
                consecutiveBedsWithoutFlowers = 0;
            }
        }
        return n <= flowersCanBePlanted;
    }
}