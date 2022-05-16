let count1, count2, fat;

for(count1=1;count1<=10;count1++){
    fat = 1;
    if(count1 % 2 != 0){
        for(count2=count1;count2>0;count2--){
            fat = fat * count2;
        }
        alert("!"+count1+"= "+fat);
    }
}