console.log('digite qual escala quer tranformar: ( f, k, c ou S para sair)');
process.stdin.on('data', function(data){
    let escala = data.toString().toLocaleLowerCase().trim()

    switch (escala){
        case 'f':
            console.log("digite o valor em Fahrenheit: ");
            process.stdin.once('data', function(data){
                let temp = Number(data)
                if (isNaN(temp)){
                    console.log("valor inexistente");
                }else{
                    let celso = ((temp-32)/1.8)
                    console.log("Em C°: " + celso.toFixed(2));
                    console.log("Em K°: " + (celso + 273.15).toFixed(2));
                }
                console.log('\n\nDigite qual escala quer tranformar: ( f, k, c ou S para sair)');
            })


            break;
                                                                                             
        case 'c':
            console.log("digite o valor em Celsius: ");
            process.stdin.once('data', function(data){
                let temp = Number(data)
                if (isNaN(temp)){
                    console.log("valor inexistente");
                }else{
                    let celso = ((temp-32)/1.8)
                    console.log("Em F°: " + celso.toFixed(2));
                    console.log("Em K°: " + (celso + 273.15).toFixed(2));
                }
                console.log('\n\nDigite qual escala quer tranformar: ( f, k, c ou S para sair)');
            })


            break;
                                                                                         
        case 'k':
            console.log(`digite o valor em Kenvin:`);
            process.stdin.once('data', function(data){
                let temp = Number(data)
                if (isNaN(temp)){
                    console.log("valor inexistente");
                }else{
                    let farehai = (temp - 273.15)*1.8+32
                    console.log("Em F°: " + farehai.toFixed(2));
                    console.log("Em C°: " + (temp - 273.15).toFixed(2));
                }
                console.log('\n\nDigite qual escala quer tranformar: ( f, k, c ou S para sair)');
            })
            break;
    
        case 's':
            process.exit()
            break;
        default:
            console.log('Escala não reconhecida ');
            break;
    }
})