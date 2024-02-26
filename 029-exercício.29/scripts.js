let num = 89;
let divisor = 0;

for(let i = 1; i <= num; i++){

    if (num % i == 0) {
        divisor++;
    }
}

if(divisor ==2){
    console.log(`O número ${num} é primo`);
    
}else {
    console.log(`O número ${num} não é primo`);
}