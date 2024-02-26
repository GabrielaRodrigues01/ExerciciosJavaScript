function podeDirigir(idade, cnh){
    if(idade >= 18 && cnh == true){
        console.log("Pode dirigir!");
        
    } else {
        console.log("Não pode dirigir");
    }
}

console.log(podeDirigir(19,true));
console.log(podeDirigir(25,true));
console.log(podeDirigir(44,1));
console.log(podeDirigir(17,false));