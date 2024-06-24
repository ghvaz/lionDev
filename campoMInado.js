const { compileFunction } = require("vm")


console.clear()

let campo = []
let campoResposta = [] 


let tamanho = 8
let qdtBomb = tamanho*0.25

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
                campoResposta[i][j] = i+ ' '
            }
        }else if( i == 0 ){
            if(j > 9 ){
                campoResposta[i][j] = ''+j+' '
            }else{
                campoResposta[i][j] = ' '+j+ " "
            }
        }else{
            campoResposta[i][j] =  ' 0 '
        }
    }
    
}

// colocar as bombas arrumar aredores no CAMPO RESṔOSTA
for(let i = 1; i <= qdtBomb; i++){
    let localA = Math.floor(((Math.random()* tamanho)+ 1))
    let localC = Math.floor(((Math.random()* tamanho)+ 1))
    campoResposta[localA][localC] = ' Z '
    
    for (let j = (localA-1); j <= (localA+1); j++) {   
        for (let k = (localC-1); k <= (localC+1); k++) {
            switch (campoResposta[j][k]) {
                case ' 0 ':
                    campoResposta[j][k] =  ' 1 '
                    break;
                case ' 1 ':
                    campoResposta[j][k] =  ' 2 '
                    break;
                case ' 2 ':
                    campoResposta[j][k] =  ' 3 '
                    break;
                case ' 3 ':
                    campoResposta[j][k] =  ' 4 '
                    break;
                case ' 4 ':
                    campoResposta[j][k] =  ' 5 '
                    break;
                case ' 5 ':
                    campoResposta[j][k] =  ' 6 '
                    break;
                case ' 6 ':
                    campoResposta[j][k] =  ' 7 '
                    break;
                case ' 7 ':
                    campoResposta[j][k] =  ' 8 '
                    break;
                
                default:

                    break;
            }
                
        }
    }        
}





//  DESENHAR CAMPO RESPOSTA
console.log('\n');
for(let i = 0; i<(tamanho+1); i++){
    for(let j =0;j<(tamanho+1);j++){
        process.stdout.write(campoResposta[i][j])
    }
    process.stdout.write('\n')

}

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