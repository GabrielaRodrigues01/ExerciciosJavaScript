const arr = [1, 2, 3, 4, 5, 6, 7, 8]
const semPares = []

for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 !== 0){
        semPares.push(arr[i]);
    }
}

console.log(semPares);

