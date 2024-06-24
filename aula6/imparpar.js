let num, resp
console.log('Digite um numero: ')
process.stdin.on('data' , function(data){
    // resp = Number(data.toString().trim())        tranformar em numero
    resp = data.toString().trim()
    num = resp % 2
    if (resp =="sair"){
        process.exit()
    }

    if (num == 0){
        console.log('O numero digitado é par\n')
    }else{
        console.log("O numero digitado é impar\n")
    }
    console.log('Digite um numero ou sair para sair ')
}

)

// let ar = [1,2,3,4]

// console.log(ar.length)