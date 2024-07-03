const addNumberInArray = require("./manipularArray/addNumberInArray");

const prompt = require("prompt-sync")({sigint: true})
var addNotas = require("./manipularArray/addNumberInArray")
var media = require("./manipularArray/mediaArray")


let notas = []

let qdtNotas = prompt('Quantas notas quer digitar')

for(let i = 0; i<qdtNotas; i++ ){
    console.log(`Digite a ${i+1}ª nota: `);
    addNotas(notas)
}


console.log(`A media das notas digitadas: ${media(notas).toFixed(2)}`);
