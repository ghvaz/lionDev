const { ADDRGETNETWORKPARAMS } = require("dns")

const prompt = require("prompt-sync")({sigint: true})
/*

let num1 = 10
let num2 = 20

let resposta = num1 + num2

console.log('Resultado: '+resposta);


// declaração de função
function soma(n1,n2){
    resp = n1 + n2
    return resp
}

console.log(soma(num1, num2))

*/


// module.exports = retirarDaArray()
// module.exports = retirarLetrasDeArrayNumerico()

/*

function retirarDaArray(elemento, elmtS){
    let index = elmtS.indexOf(elemento)
    elmtS.splice(index , 1)
    return elmtS
}


function retirarLetrasDeArrayNumerico(arrayA){
    let numeros = []
    arrayA.forEach(element => {
        let aux = (Number(element))
        if(!isNaN(aux)){
            numeros.push(aux)
        }
    });

    return numeros
}

function ordenarNumeros(arrayA){
    let aux = retirarLetrasDeArrayNumerico(arrayA)
    let array = [...aux]
    let ord = []
    let tam = aux.length

    for (let i = 0; i < tam; i++) {
        let max = 0
        array.forEach(element => {
            if(max < element){
                max = element
            }
        })
        ord.push(max)
        retirarDaArray(max, array)
    }
    return ord
}


function tranformarArrayEmString(array){
    let lista = [...array]
    let aux = ''
    lista.forEach(element => {
        aux = aux + element
    });
    return aux
}


let num = prompt("Digite um numero: ")
num = num.split('')
num = retirarLetrasDeArrayNumerico(num)
num = ordenarNumeros(num)
num = tranformarArrayEmString(num)

console.log(num);

*/


function media(ar){
    let soma = 0
    ar.forEach(element => {
        soma += element
    });
    soma = soma/ar.length

    return soma
}


function maiorNumero(array){
    let max = array[0]
    array.forEach(element => {
        if(max<element){
            max = element
        }
    });
    return max
}

function menorNumero(ar){
    let min = ar[0]
    ar.forEach(element => {
        if(min>element){
            min=element
        }
    });
    return min;
}

function numerosMaioresQ(array, Q){
    let numeros = []
    array.forEach(element => {
    if(element >= Q ){
        numeros.push(element)
    }
    });
    return numeros
}

function numerosMenoresQ(array, Q){
    let numeros = []
    array.forEach(element => {
    if(element <= Q ){
        numeros.push(element)
    }
    });
    return numeros
}
// declara um array de notas, sendo o array
// composto de valores númericos
let notas = [7.5, 8.0, 6.0, 9.5, 5.0, 8.5, 7.0, 10.0, 6.5, 9.0]

// {
    
//     let soma = 0 // ref A
//     let maiorNota = notas[0] // reb B
//     let menorNota = notas[0] // ref B
//     let notasAcimaMedia = 0 // ref C
//     let notasAbaixoMedia = 0 // ref E
    
//     // percorre o array de notas e mostra 
//     // no terminal cada nota
//     for (let i = 0; i < notas.length; i++) {
//         soma += notas[i] // ref A
    
//         // ref B
//         if (notas[i] > maiorNota) {
//             maiorNota = notas[i]
//         }
    
//         // ref B
//         if(notas[i] < menorNota) {
//             menorNota = notas[i]
//         }
    
//         // ref C
//         if(notas[i] >= 6) {
//             console.log(notas[i])
//             notasAcimaMedia++
//         } else { // ref E
//             notasAbaixoMedia++
//         }
//     }
    
// }

// console.log("------------professor-------------");
// console.log(soma / notas.length) // ref A
// console.log(maiorNota, menorNota) // ref B
// console.log(notasAcimaMedia) // ref C
// console.log("reprovados:", notasAbaixoMedia) // ref E

// notas.push(8.0) // ref D

// ref D
for(let i = 0; i < notas.length; i++) {
    console.log(notas[i])
}

console.log("-------------EU-------------");
console.log("maior nota: "+maiorNumero(notas));
console.log("menor nota: "+menorNumero(notas));
console.log("notas maiores q 6 ou igual: "+numerosMaioresQ(notas, 6));
console.log("notas menores q 6 ou igual: "+numerosMenoresQ(notas, 6));
console.log("media das notas: "+media(notas));
