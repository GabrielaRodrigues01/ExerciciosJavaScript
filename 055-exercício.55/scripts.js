function faixaEtaria(idade){
    
    if (idade < 12) {
        return "Criança";
        
    } else if (idade >= 12 && idade <=24) {
        return "Jovem";
        
    } else {
        return "Adulto";
    }
}

let idadeCrianca = 8;
let crianca = faixaEtaria(idadeCrianca);

let idadeAdulto = 30;
let adulto = faixaEtaria(idadeAdulto);

console.log("Criança:", crianca);
console.log("Adulto:", adulto);