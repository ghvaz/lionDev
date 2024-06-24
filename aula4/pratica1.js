
var nome = '', idade = '', mensagem = '';

console.log('Digite seu nome: ');
process.stdin.once('data' , function(data){
        nome = data.toString().trim();
        console.log('Digite sua idade: ');
        process.stdin.once('data', function(data){
            idade = data.toString().trim();
            mensagem = "Olá "+nome+" idade é só um numero mesmo com "+idade+" anos se divirta!!";
            process.stdout.write(mensagem);
            process.exit();

        }
    )
}
);

// function leitura( saida ){
//     process.stdin.once('data', function(data){
//         saida = data.toString().trim();
//         process.exit;
//     })
// }
// console.log('Nome: ')

// leitura(nome)

// console.log('idade: ')

//     console.log('Você é' +nome+ 'e tem '+idade)