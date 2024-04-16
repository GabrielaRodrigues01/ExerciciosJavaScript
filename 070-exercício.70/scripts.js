let cores = ['azul', 'amarelo', 'rosa', 'lilás', 'vermelho',];
let animais = ['cachorro', 'gato'];

function verificaElementos(arr){
    if(cores.length >=5){
        console.log("Possui muitos elementos");
    }else {
    console.log("Possui poucos elementos");
    }
}

verificaElementos(cores);
verificaElementos(animais);