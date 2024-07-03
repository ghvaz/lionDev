const { compileFunction } = require("vm")
const prompt = require("prompt-sync")({sigint: true})
function log(a){
    process.stdout.write(a)
}


console.clear()

let campo = []
let campoResposta = [] 
let arredores = []


let tamanho = 5
let qdtBomb = 2 //Math.round(tamanho*0.25)

console.log("Há "+qdtBomb+' bombas no campo');

// CRIANDO O CAMPO LIMPO
for (let i = 0; i < (tamanho+1); i++) {
    campo.push([])
    for(let j = 0; j < (tamanho+1); j++){
        if(j == 0){
            if(i > 9){
                campo[i][j] = i+""
            }else{
                campo[i][j] = i+ ' '
            }
        }else if( i == 0 ){
            if(j > 9 ){
                campo[i][j] = ''+j+' '
            }else{
                campo[i][j] = ' '+j+ " "
            }
        }else{
            campo[i][j] =  ' □ '

        }
    }
    
}

// CRIANDO CAMPO RESPOSTA
for (let i = 0; i < (tamanho+1); i++) {
    campoResposta.push([])
    for(let j = 0; j < (tamanho+1); j++){
        if(j == 0){
            if(i > 9){
                campoResposta[i][j] = i+""
            }else{
                campoResposta[i][j] = i+' '
            }
        }else if( i == 0 ){
            if(j > 9 ){
                campoResposta[i][j] = ''+j+' '
            }else{
                campoResposta[i][j] = ' '+j+" "
            }
        }else{
            campoResposta[i][j] =  ' 0 '
        }
    }
    
}

// colocar as bombas arrumar aredores no CAMPO RESṔOSTA
for(let i = 1; i <= qdtBomb; i++){
    aredor = []
    let localA = Math.floor(((Math.random()* tamanho)+ 1))
    let localC = Math.floor(((Math.random()* tamanho)+ 1))
    campoResposta[localA][localC] = ' Z '
    for (let j = (localA-1); j <= (localA+1); j++) {   
        for (let k = (localC-1); k <= (localC+1); k++) {
            if( !(j == localA && k == localC) ){
                aredor.push(`${j}e${k}`)
            }
        }
    }
    arredores.push(aredor)
}
console.log(arredores);

// for (let i = 0; i < qdtBomb; i++) {
    
// }



//  DESENHAR CAMPO RESPOSTA
console.log('\n');
for(let i = 0; i<(tamanho+1); i++){
    for(let j =0;j<(tamanho+1);j++){
        process.stdout.write(campoResposta[i][j])
    }
    process.stdout.write('\n')
}
console.log('\n');

//DESENHAR O CAMPO 
// {
//     console.log('\n');
//     console.log('\n');
//     for(let i = 0; i<(tamanho+1); i++){
//         for(let j =0;j<(tamanho+1);j++){
//             process.stdout.write(campo[i][j])
//         }
//         process.stdout.write('\n')
    
//     }
//     console.log('\n');
//     console.log('\n');

// }






process.exit();