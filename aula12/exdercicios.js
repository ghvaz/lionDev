let cnt = 0
let qdt = 5
let numeros = []
process.stdin.on("data", function(data){
    numeros.push(Number(data))
    cnt++
    if(cnt == qdt){
        let numerosPares = [], numerosImpares = []
        numeros.forEach(element => {
            let resl = element % 2
            if(resl == 0 ){
                numerosPares.push(element)
            }else{
                numerosImpares.push(element)
            }
        });
        console.log("Pares for")
        for (let o = 0; o < numerosPares.length; o++) {
            console.log(numerosPares[o]);
        }
        console.log("IMPares for")
        for (let l = 0; l < numerosImpares.length; l++) {
            console.log(numerosImpares[l])
            
        }
        // console.log("com for:")
        // for (let i = 0; i < numeros.length; i++) {
        //     console.log(numeros[i]);
        // }
        // console.log("com forEach:")
        // numeros.forEach(element => {
        //     console.log(element)
        // });

        // console.log("com while:")
        // while (cnt > 0) {
        //     console.log(numeros[(cnt-1)])
        //     cnt--
        // }
        // console.log("com DoWhile:")
        // do {
        //     console.log(numeros[cnt])
        //     cnt++
        // } while (cnt < qdt);
        // process.exit()
    }
}
)