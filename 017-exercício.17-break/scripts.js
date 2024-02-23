for(let i = 0; i < 10; i = i + 1){
    
    let nome = "Gabriela";

    if(i == 3){
        nome = "Gabs";
    }

    if(i == 5 && nome == "Gabs"){
        console.log("O nome é Gabs, pode parar");
        break;
    }

    console.log(i);
}