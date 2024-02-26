function classificarNumero(numero){

    if (numero > 0 && numero % 2 === 0) {
        return "Positivo e Par";

      } else if (numero > 0 && numero % 2 !== 0) {
        return "Positivo e Ímpar";

      } else if (numero < 0) {
        return "Negativo";
        
      } else if (numero === 0) {
        return "Neutro";
      }
    }
     