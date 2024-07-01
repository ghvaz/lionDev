let palavra = []
let tentativa = [], letrasErradas = []
let tem = false
let vidas = 6
let temEspaco = 0


console.log('Digite a palavra a ser adivinhada: ')
// entrada de usuario para a palavra a ser acertada
process.stdin.once('data', function(data){
    let plv = data.toString().trim().toLowerCase()

    // separação da palavra de letra por letra
    palavra = plv.split("")

    console.clear()

    // criando a palavra com asteriscos a ser acertada
    palavra.forEach((element, index) => {
        tentativa.push('*')

        // para caso seja uma palavra composta 
        if(element == " "){
            tentativa[index]='-'
            temEspaco++
        }
    });

    // inicio da adivinhação
    console.log("digite uma letra: ")

    // codigo para verificação do tempo para ver o quão rapido foi
    let tmpI = performance.now()

    // inicio do game
    // Entrada do usuario para adivinhação
    process.stdin.on('data', function(data){
        tem = false
        let letra = data.toString().trim().toLowerCase()

        // verificação se o usuario digitou somente uma letra
        if( letra.length == 1 ){
            palavra.forEach((element, index) => {
                if( letra == element ){
                    tentativa[index] = letra
                    tem = true
                }
            })

            // caso a letra esteja na palavra para enviar uma mensagem para o usuario
            if(tem){
                console.log("\x1b[32mCorreto, a letra existe\x1b[0m")
                for (let i = 0; i < tentativa.length; i++) {
                    process.stdout.write(tentativa[i])                    
                }
                // quebra de linha
                console.log('\n')
            }

        }else{
            // caso o usuario tenha digitado mais de uma letra 
            console.log('Uma letra somente.')
        }

        // caso o usuario não  tenha acertado a letra
        if(!tem && letra.length < 2){
            console.clear();

            if(letrasErradas.includes(letra)){
                console.log("\x1b[33mLetra já tentada\x1b[0m");
            }else{
                letrasErradas.push(letra)
                console.log("A letra não esta na palavra")
                vidas--
                console.log("Você perdeu uma vida")
            }

            // caso o usuario perca
            if(vidas == 0 ){
                console.log("   GAME OVER   \nVocê foi enforcado")
                process.exit()

            }else{
                // caso o usuario ainda tenha vidas
                console.log("Você ainda tem "+vidas+" vidas")

                // mostra as letras já tentadas
                console.log(`\x1b[31mLetras erroniamentes tentadas: \x1b[0m`);
                console.log(`\x1b[31m${letrasErradas}\x1b[0m`)

                // imprimir a palavra novamente
                for (let i = 0; i < tentativa.length; i++) {
                    process.stdout.write(tentativa[i])                    
                }
                // quebra de linha
                console.log('\n')
            }
        }else if(letra.length > 1 ){
            console.clear();
            console.log('Somente uma letra ');
        }

        // para palavras compostas 
        if(temEspaco != 0){
            let palavraComEspaco = tentativa.length
            let letrasFaltantes = 0 
        // verifica ainda tem letras faltantes
            tentativa.forEach(element => {
                if ( element == '*')
                    letrasFaltantes++
            });

            // verifica se há letras faltantes e conclução do jogo em caso de palavra composta
            if(letrasFaltantes == 0 ){
                
                //pra verificar o tempo 
                let tmpF = performance.now()
                // transformação do tempo de milisegundos para segundos
                tmpF = ((tmpF - tmpI)/1000)
                

                console.log(`\x1b[32m-----------PARABENS----------\x1b[0m`)
                console.log('vc passou ' + tmpF.toFixed(2) + ' segundos para acertar')
            process.exit()
            }

        // comclução do jogo sem espaços
        }else if(tentativa.toString() === palavra.toString() ){
            let tmpF = performance.now() 
            tmpF = ((tmpF - tmpI)/1000)
            console.log("Parabens")
            console.log('vc passou ' + tmpF.toFixed(2)+ ' segundos para acertar')
            process.exit()

            // kkkk
    }
    });
})
    

