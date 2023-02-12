let arr = [0,3,2,4,5,6,7, true]
let even = 0;
let odd = 0;
let zero = 0;

for (let i = 0; i < arr.length; i++){
    if (arr[i] === 0){
        zero++;
    } else if (arr[i] % 2 === 0){
        even++;
    } else if (arr[i] % 2 !== 0){
        odd++;
    } 
}

alert("Чётных чисел: " + even + ". Нечётных чисел: " + odd + ". Нулей: " + zero + ".");