function DecrementarEImprimirPares(numero){

    numero = Math.abs(numero);
    for(let i =  numero; i>0; i--){

        if(i % 2 === 0){
            console.log(i);

        }
    }
}

DecrementarEImprimirPares(10)