// --------------comandos de array--------------------
// arry.push(var)* 	     add no final array 
// arry.pop()* 	         remove o ultimo item
// arry.shift()* 	     remove o primeiro item array
// arry.unshift(var)*	 add no começo do arry
// arry.includes(var)* 	 retorna true se o elemnto existe
// arry.indexOf(var)*    retorna o indice do obj
// arry.slipe(com, qdt)* remove o item do indice informado + pode excluir uma serie de receber dois parametros (começo ,qdt de pos apartir do começo)
// arry.lenght()*        retorna o tamanho da arry (qdt total)

let prova = []
// console.log("Digite a primeira nota: ")
// process.stdin.once('data', function(data){
//         prova[0] = Number(data);
//         console.log("Digite a segunda nota: ")
//         process.stdin.once('data', function(data){
//             prova[1] = Number(data)
//             console.log("Digite a terceira nota: ")
//             process.stdin.once('data', function(data){
//                 prova[2] = Number(data);
                
//                 let media = (prova[0] + prova[1] + prova[2]) / 3
//                 console.log('A média do aluno foi de '+media)
                
//             {   
//                 if(prova[0] >= prova[1] && prova[0] >= prova[2]){
//                     console.log('A maior nota foi de '+prova[0]+' na primeira prova ')
//                 }
//                 if(prova[1] >= prova[2] && prova[1] >= prova[0]){
//                     console.log('A maior nota foi de '+prova[1]+' na segunda prova ')
//                 }
//                 if(prova[2] >= prova[1] && prova[2] >= prova[0]){
//                     console.log('A maior nota foi de '+prova[2]+' na terceira prova ')
//                 }
//             } 

//             {
//                 if(prova[0] <= prova[1] && prova[0] <= prova[2]){
//                     console.log('A menor nota foi de '+prova[0]+' na primeira prova ')
//                 }
//                 if(prova[1] <= prova[2] && prova[1] <= prova[0]){
//                     console.log('A menor nota foi de '+prova[1]+' na segunda prova ')
//                 }
//                 if(prova[2] <= prova[1] && prova[2] <= prova[0]){
//                     console.log('A menor nota foi de '+prova[2]+' na terceira prova ')
//                 }
//             }

                
                

//                 }
//             )
//             }
//         )
//     }
// )
// process.exit();



console.log('Digite a nota da primeira prova ou sair para sair')
process.stdin.on("data", function(data){
    prova[cont] = data.toString().trim()
    if(prova[cont] == 'sair'){
        process.exit();
    }else{
    cont++
    if(cont == (qdtNotas)){
        let media = (Number(prova[0])+ Number(prova[1])+ Number(prova[2]) )/3 
        console.log("media :" +media)
        process.exit()
        }
    console.log('Digite a nota da'+(cont+1)+'º prova')
    }
}

)