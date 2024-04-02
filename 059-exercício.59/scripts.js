function countVowels(string) {
    const vowels = "aeiouAEIOU";
    
    let count = 0;
    
    for (let char of string) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
const inputString = "Hello World";
console.log("Número de vogais na string:", countVowels(inputString));