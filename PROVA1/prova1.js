function escreva(data) {
    console.log(data)
}



/*
                 1
*/

// let nome = 'Zé'
// console.log(nome)

/*
                 2
*/

// let numero = 514
// let resp = false

// if ( numero%2 == 0) {
//     resp = true
// }else{ resp = false }

// console.log(`O numero ${numero} é par?  ${resp}`)

/*
                 3
*/

// let idade = 18                              /*declaração da variavel idade e recebe 18 */
// let mensagem = ''                           /*declaraçao da variavel mensagem e recebendo um texto vazio */
// if(idade >= 16){                            /*verifica se idade é maior ou igual a 16 */ 
//     mensagem = 'Você pode votar'            /*como 18 > 16 essa parte executa e mansagem recebe a string */
// }else{ mensagem = 'Você não pode votar'}    /*essa parte é ignorada */
// console.log(mensagem)                       /* imprime o valor de mensagem */

/*
                 4
*/

// let idade = 21                              /*declaração da variavel idade e recebe 21 */
// let mensagem = ''                           /*declaraçao da variavel mensagem e recebendo um texto vazio */
// if(idade >= 18){                            /*verifica se idade é maior ou igual a 18 */ 
//     mensagem = 'Você pode dirigir'          /*como 21 > 18 essa parte executa e mansagem recebe a string */
// }else{ mensagem = 'Você não pode dirigir'}  /*essa parte é ignorada */
// console.log(mensagem)                       /* imprime o valor de mensagem */

/*
                 5
*/

// let numeros = [1,2,3,4,5]           /*declaração da arry numeros e seus valores 1 no indice 0, 2 no indice 1, ...*/
// let soma = 0                        /*declaração da variavel soma e seu valor de zero */
// for (let o=0;o<numeros.length;o++){ /*laço de repedição q inicia no zero e vai até o tamanho do arry*/
//     if (numeros[o]%2 == 0 ) {       /*condicional if para verificar se o numero é par */
//         soma += numeros[o]}         /*soma recebendo o seu valor mais o numero dentro da arry*/
// }
// escreva(soma)                       /*imprime o valor de soma */


/*    
                 6
*/
let notas =[7.5,8.0,6.0,9.5,5.0,8.5,7.0,10.0,6.5,9.0]
let media = 0
let max=0, min = 9999
let notaAcima = 0


for (let i = 0; i < notas.length; i++) {
    //escreva(notas[i])
    media += notas[i]

    if(max < notas[i]) {max = notas[i]}
    if(min > notas[i]) {min = notas[i]}

    if(notas[i] > 6){notaAcima++}

}
media = media/notas.length
escreva(`media:${media}`)
escreva(`Max: ${max} e Min: ${min}`)
escreva(`qdt acima: ${notaAcima}`)

notas.push(8)

// for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//         if(notas[i] > notas[j]){
//             max = notas[i]
//         }

        
//     }
// }