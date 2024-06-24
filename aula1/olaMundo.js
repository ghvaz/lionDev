// console.log("Olá Mundo :) YES");

const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

// rl.question('digite nome: ', (nome) => { //nome é uma string
//     console.log('ola, '+nome)
//     rl.close()
// })
// let cont = 0
// let num1,num2,num3
// let resposta = 0
// rl.on('line', (resposta)=>{
//     cont++
//     if(cont == 1){
//         rl.question('num1: ', num1)
//     }else if(cont == 2){
//             rl.question('num2: ', num2)
//             }else if(cont == 3){
//                 rl.question('num3: ', num3)

//             }
//     resposta = num1+num2+num3
//     rl.write(resposta)
// })