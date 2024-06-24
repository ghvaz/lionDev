/*
                     ATIVIDADE 1
*/
// console.log("Digite um numero: ")
// process.stdin.on("data", function(data){
//     let num = Number(data)

//     if( num == NaN ){
//         console.log("Vc não digitou um numero.")
//     }else {
//         console.log('O antecessor do numero digitado é '+(num-1)+' e o sucessor é '+(num +1))
//     }

// })

/*
                     ATIVIDADE 2
*/

// let notas = []
// let dg = 0
// let media = 0
// console.log("Digite as 4 notas do aluno")
// process.stdin.on('data', function(data){
//     dg = Number(data)
//     console.log(isNaN(dg))
//     if(isNaN(dg)) {
//         console.log('Nota invalida')
//     }else{
//         if(dg >= 0 && dg <= 10){
//             notas.push(dg)
//                 if(notas.length == 4){
//                     console.log('Digite o nome do aluno: ')
//                     process.stdin.once('data', function(data){
//                         let nome = data.toString().trim()
//                         process.stdout.write(`O aluno ${nome} teve média de: `)
//                         notas.forEach(element => {
//                             media += element 
//                         });
//                         media = media/3
//                         console.log(media.toFixed(2))
//                         if(media <7){
//                             console.log('E esta REPROVADO')
//                             process.exit()
//                         }else{
//                             console.log('E esta APROVADO')
//                             process.exit()
//                         }
//                     })
//                 }
//         }else{
//             console.log('Nota INVALIDA')
//         }
//         }
// })

/*
                     ATIVIDADE 3
*/

// let valores = []
// process.stdin.on('data', function (data) {
//     valores.push(data)
//     if(valores.length == 3){
//         let soma = valores[0] + valores[1]

//         if(soma > valores[2]){
//             console.log("A soma dos dois primeiros numeros digitados é MAIOR que o terceiro")
//         }else {
//             console.log('A soma dos dois primeiros numeros digitados é menor que o terceiro')
//         }
//         process.exit()
//     }

// })

/* 
                         ATIVIDADE 4
*/

// process.stdin.on('data', function (data) {
//     let valores = []
//     valores.push(data)
//     let resl = 0
//     if (valores.length == 2){
//         if(valores[0] == valores[1]){
//             resl = valores[0] * 2
//             if( resl % 2 == 0){
//                 console.log(`Foi somado e o resultado é par`)
//             }else{
//                 console.log(`Foi somado e o resultado é impar`)
//             }

//         }else{
//             resl = valores[0] * valores[1]
//             if( resl % 2 == 0){
//                 console.log(`Foi multiplicado e o resultado é par`)
//             }else{
//                 console.log(`Foi multiplicado e o resultado é impar`)
//             }
//         }

//     }
        
// })


/* 
                         ATIVIDADE 5
*/
// let peso, alt, imc
// console.log('Digite peso:')
// process.stdin.once('data', function(data){
//     peso = data
//     console.log('Digite altura:')
//     process.stdin.once('data', function (data) {
//         alt = data
//         imc = 0

//         imc = (peso/(alt*alt))
//         console.log(`imc ${imc} peso ${peso} altura ${alt}`)

//         if(imc < 18.5){
//             console.log('Abaixo do peso')
//         }else if( imc < 24.9){
//             console.log('Peso ideal PARABENS')
//         }else if( imc < 29.9){
//             console.log('levemente acima do peso')
//         } else if( imc < 34.9){
//             console.log('Obesidade grau I')
//         } else if ( imc < 39.9){
//             console.log('Obesidade grau II')
//         }else{
//             console.log('Obesidade grau III (morbida)')
//         } 
//         process.exit()
//     })
// })

/*
                     ATIVIDADE 6

    06 - Faça um script que receba do usuário o valor de um produto
e a forma de pagamento, conforme a escolha de pagamento
calcule e apresente a forma escolhida e o valor final.

1- A vista em dinheiro ou pix, recebe 15% de desconto.
2- A vista no cartão de crédito, recebe 10% de desconto
3- Parcelado no cartão em duas vezes, preço normal do produto
sem juros.
4- Parcelado em mais de três vezes ou mais, preço normal do
produto mais juros de 10%.
*/
// let valor = 0, pag = 0

// console.log("valor do produto: ")
// process.stdin.once('data', function(data){
//     valor = Number(data)

//     console.log('\n\nEscolha a forma de pagamento \n1. PIX/Dinheiro\n2. Cartão de crédito\n3. parcelado em 2 vezes\n4. parcelado em mais de 2 vezes ')
//     process.stdin.once('data', function(data){
//         pag = Number(data)

//         if(pag == '1'){
//             console.log('Valor Final do produto é '+ ( valor - (valor*.15) ) )
//             process.exit()
//         }else if(pag == '2'){
//             console.log('Valor Final do produto é '+ ( valor - (valor*.10) ) )
//             process.exit()
//         }else if(pag == '3'){
//             console.log('Valor Final do produto é '+ ( valor ) )
//             process.exit()
//         }else if(pag == '4'){
//             console.log('Valor Final do produto é '+ ( valor + (valor*.10) ) )
//             process.exit()
//         }else{
//             console.log("forma de pagamento invalida escolha uma das opções")
//         }

//     })

// })

/*
                     ATIVIDADE 7
07 - Escreva um programa que solicite ao usuário 10 votos. Para
uma eleição presidencial, sendo que existem quatro candidatos. Os
votos são informados através de códigos. Os dados utilizados para
a contagem dos votos obedecem à seguinte codificação: 1,2,3,4 =
voto para os respectivos candidatos; 5 = voto nulo; 6 = voto em
branco; Elabore um algoritmo que leia o código do candidato em um
voto. Calcule e escreva: Total de votos para cada candidato; Total de
votos nulos; Total de votos em branco;
Mensagem inicial: Por favor, insira o número do seu voto (1-4 para os
candidatos, 5 para voto nulo, 6 para voto em branco):
                     
*/
let votos = []
let branco = 0, nulo = 0
console.log('Por favor, insira o número do seu voto (1-4) para os candidatos, 5 para voto nulo, 6 para voto em branco')
process.stdin.on('data', function(data){
    let aux = Number(data)
})