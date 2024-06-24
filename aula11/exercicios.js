/*
let numeros = [2,4,6,8]
let dgNum = []
let estaonalistas = []

console.log("digite numero para tentar acertar os predefinidos")
process.stdin.on('data', function(data){
    let validacao = data.toString().trim()
    if(validacao != 'sair'){
        dgNum.push(Number(data));
        console.log('adicionado a sua lista, ou sair para ver a resposta')
    }else{
        for (let i = 0; i < dgNum.length; i++) {
            let numeroListaDigitado = dgNum[i]
            for (let j = 0; j < numeros.length; j++) {
                if(numeros[j] == numeroListaDigitado){
                    let x = Number(numeros[j])
                    estaonalistas.push(x)
                }           
            }            
        }
        console.clear()
        console.log('Os numeros digitados que estao na lista predefinida são: \n' + estaonalistas)
        // estaonalistas.forEach(element => {
        //     console.log(element)
        // });
        process.exit();
    }
    
    // dgNum.forEach(element => {
    //     console.log(element)
    // });
})

*/
//////////////exercicio 7

let nu0ate25=0, nu26ate50=0, nu51ate75=0, nu76ate100=0
let numeros = []
process.stdin.once('data', function(data){
    let dg = data.toString().trim()
    numeros = dg.split(',')
    //console.log(numeros)
    numeros.forEach(element => {
        if(element >= 0 && element < 26){
            nu0ate25++
        }
        if(element >= 26 && element < 51){
            nu26ate50++
        }
        if(element >= 51 && element < 76){
            nu51ate75++
        }
        if(element >= 76 && element < 101){
            nu76ate100++
        }
        
    });
    
            console.log('Vc digitou '+ nu0ate25 +" numeros entre 0 e 25")
            console.log('Vc digitou '+ nu26ate50 +" numeros entre 26 e 50")
            console.log('Vc digitou '+ nu51ate75 +" numeros entre 51 e 75")
            console.log('Vc digitou '+ nu76ate100+" numeros entre 76 e 100")
            process.exit()
})