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

function retirarDaArray(elemento/*o q retirar */, elmtS/*ARRAY */){
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
