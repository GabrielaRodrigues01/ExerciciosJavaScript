function reverseString(str) {
    return str.split('').reverse().join('');
}

const originalString = "Hello, world!";
const reversedString = reverseString(originalString);
console.log("String original:", originalString);
console.log("String invertida:", reversedString);