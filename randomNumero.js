/*

1 gerar um numero aleatorio
2 receber a entrada do usuario
3 verificar se o numeo esta correto
4 repitir a etapa 2 e 3 
5 parar de repetir qundo acertar o numero

random()
flot()

*/ 

let tentativa 
let qdtNumeros = 0
let vidas = 0 


let adv = (Math.random() * qdtNumeros)
console.clear();

console.log("Digite o numero maximo para advinhar ");
process.stdin.once("data", function(data){
    qdtNumeros = Number(data)
    adv = Math.floor(adv)
    vidas = Math.floor((qdtNumeros/3)/3) + 1
    //console.log(adv);
    console.log(`Tente acertar o numero entre 1 e ${qdtNumeros}`);
    
    process.stdin.on('data', function(data){
        Tentativa = Number(data)
        if (isNaN(tentativa) || tentativa == '\n') {
            console.log('UM NUMERO INVALIDO');
        }else{
            if (tentativa > qdtNumeros) {
                console.log('ENTRE 0  E  '+qdtNumeros);
            }else{
                if (adv == tentativa ){ 
                    console.log('ACETOU\nPARABENS');
                    process.exit()
                }
                else { 
                    console.log("Tenta de novo");
                    vidas--
                    if(vidas < 0){
                        console.log('GAME OVER');
                        process.exit()
                    }
                    console.log(`Vc tem ${vidas} vidas`);
                    
                    switch(true){
                        case (tentativa > adv):
                            console.log(`O numero correto é menor que ${tentativa}\n`);
                            break;
                            case (tentativa < adv):
                                console.log(`O numero correto é maior que ${tentativa}\n`);
                            }
                            
                        }
                        
                    }
        }
            })
            
            
        })
            // let arrys= [12,54,482,81,169,61,9,1,8]
            // console.log(arrys);
            // console.log(...arrys);