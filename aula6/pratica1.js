let resp

console.log("Você gosta de café?")
process.stdin.on('data', function(data){
        resp = data.toString().trim().toLowerCase();
        if (resp == 'sim'){
            console.log('Legal, café é um otimo energedico')
            process.exit()
        }
        if(resp == 'não' || resp == 'nao'){
            console.log("É né eles deixam os dentes amarelos")
            process.exit()
        }else{
            console.log("resposta invalida responda com sim ou não")
        }
    }

)