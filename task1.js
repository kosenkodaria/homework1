const numsArray = [1, 12, 34, 71, 14, 12, 33, 70, 82, 81, 9, 19, 90];
let sum = 0;

for (let i=0; i < numsArray.length; i++){
    if (numsArray[i] % 2 == 0){
        sum += numsArray[i];
    }
}
console.log(sum);

