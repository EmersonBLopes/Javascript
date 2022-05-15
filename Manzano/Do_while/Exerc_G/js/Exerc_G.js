let count = new Array(),
    fat = 1;
count[1] = 0;
do {
    if (count[1] % 2 != 0) {
        count[2] = count[1];
        do {
            fat = fat * count[2];
            count[2]--
        } while (count[2] >= 1)
        alert(count[1]+"! = "+fat);
        fat = 1;
    }
    count[1]++
} while (count[1] <= 10)