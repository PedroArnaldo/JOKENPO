const readline = require('readline'); //possibilita a leitu de comando digitados no terminal

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    
});

rl.question('Qual é a sua jogada, pedra, papel ou tesoura? ', response => {

    const option = {
        pedra: 1,
        papel: 2,
        tesoura: 3 
    };

    const player = option[response];
    const cpu = Math.round(Math.random() * 2) + 1;
    
   const list = ['pedra', 'papel' , 'tesoura'];

    console.log("CPU: " + list[cpu-1]);

    //stone test
    if(player === 1 && cpu === 1)
    {
        console.log("Empate!");
    }
    else if(player === 1 && cpu === 2)
    {
        console.log("Você perdeu!");
    }
    else if(player === 1 && cpu === 3)
    {
        console.log("Você ganhou!");
    }
    
    // paper test
    if(player === 2 && cpu === 1)
    {
        console.log("Você ganhou!");
    }
    else if(player === 2 && cpu === 2)
    {
        console.log("Empate!");
    }
    else if(player === 2 && cpu === 3)
    {
        console.log("Você perdeu!");
    }


    //scissors test
    if(player === 3 && cpu === 1)
    {
        console.log("Você perdeu");
    }
    else if(player === 3 && cpu === 2)
    {
        console.log("Você ganhou!");
    }
    else if(player === 3 && cpu === 3)
    {
        console.log("Empate!");
    }
    rl.close();

});

