function isPalindrome(palavra) {

    palavra = palavra.toLowerCase().replace(/ /g, '');
    
        const palavraInvertida = palavra.split('').reverse().join('');
    
        return palavra === palavraInvertida;
    }
    
    console.log(isPalindrome('radar')); 
    console.log(isPalindrome('hello')); 