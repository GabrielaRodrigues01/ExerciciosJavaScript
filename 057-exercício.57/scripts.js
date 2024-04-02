function calculateAverage(numbers) {
    if (numbers.length === 0) {
        return 0; 
}
    const sum = numbers.reduce((acc, num) => acc + num, 0); 
    const average = sum / numbers.length; 
    return average; 
}
const numbersArray = [10, 20, 30, 40, 50];
const average = calculateAverage(numbersArray);
console.log("Média:", average);