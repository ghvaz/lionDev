let pessoa = {
    nome: "",
    idade: "",
    chn: ""
}

//console.log('tipo '+typeof(pessoa))
process.stdin.once('data', function(data){
pessoa.nome = Number(data.toString().trim());

console.log('tipo '+typeof(pessoa.nome))
console.log((pessoa.nome))
    if(pessoa.nome == NaN){
        deu
        
        console.log('erro')
    }else{
        console.log('deu')
    }
}

)

//console.log("digite o seu nome: ")

// process.stdin.once('data', function(data){
//     pessoa.nome = data.toString().trim();

//     console.log('Digite o sua idade: ')
//     process.stdin.once('data', function(data){
//         pessoa.idade = data.toString().trim();

//         console.log('Você possui cnh? ')
//         process.stdin.once('data', function(data){
//             pessoa.chn = data.toString().trim().toLowerCase();

//             console.log('Olá '+pessoa.nome+" você tem "+pessoa.idade)

//             if(pessoa.chn == 'sim'){
//                 console.log('E vc possui CNH')
//             }else{
//                 console.log('E vc NÃO possui CNH')
//             }
//             process.exit()
//             }
//         )
//         }
//     )
//     }
// )   





