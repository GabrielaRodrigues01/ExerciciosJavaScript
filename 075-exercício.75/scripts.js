function removeDuplicates(array) {
    let uniqueArray = [];
    
    array.forEach(function(element) {
        if (!uniqueArray.includes(element)) {
            uniqueArray.push(element);
        }
    });
    
    return uniqueArray;
}

let arrayComDuplicatas = [1, 2, 2, 3, 4, 4, 5];
let arraySemDuplicatas = removeDuplicates(arrayComDuplicatas);
console.log(arraySemDuplicatas); 