function sumEvenNumbers(numbers) {
    let sum = 0;
    
    for (let number of numbers) {
        if (number % 2 === 0) {
            sum += number;
        }
    }
    
    return sum;
}

const array = [1, 2, 3, 4, 5, 6];
console.log("Soma dos números pares:", sumEvenNumbers(array));