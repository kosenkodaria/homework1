const numbers = [3, 15, 23, 56, 66, 71, 12, 90];
let max = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 == 0 && numbers[i]> max) {
        max = numbers[i];
    }
    
}
console.log(max);
