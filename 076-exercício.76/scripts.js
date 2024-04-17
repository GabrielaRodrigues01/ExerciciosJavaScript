function sumUniqueNumbers(numbers) {
    const counts = {};

    for (let num of numbers) {
        counts[num] = (counts[num] || 0) + 1;
    }

    let sum = 0;

    for (let num in counts) {
        if (counts[num] === 1) {
            sum += parseInt(num); 
        }
    }

    return sum;
}

const array = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7];
console.log(sumUniqueNumbers(array)); 