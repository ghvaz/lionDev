let idade, ano = 2024, cnh
console.log('Qual sua idade: ')
process.stdin.once('data', function(data){
        idade = data
        ano = ano - idade;
        console.log('Vc nasceu em '+ano);
        console.log("Vc possui CNH: ")
        process.stdin.once('data' , function(data){
            cnh = data.toString().trim();
            if(cnh == 'sim' || cnh == 'Sim' || cnh == "SIM" || cnh == "sIM"){
                if( idade >= 18){
                    console.log("Vc possui CNH com "+idade );
                }else{
                    console.log("Como?????")
                    process.exit();
                }
                }else {
                    console.log("Vc não possui CNH com "+idade);
                    process.exit();
                }
                
            }
        )
        }
    )