// let coresfavoritas = ['preto', 'azul', 'verde']
// let coresEspeciais = []

// ProcessingInstruction.stdin.once('data' , function(data){
//     let corDoUsuario = data.toString().trim();
//     'Sua'
//     }

// )
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//exercicio 1 

// let hobbies = []
// console.log("Digite seus hobbies para adicionar na lista")
// process.stdin.on('data', function(data){
//         let digitado = data.toString().trim().toLowerCase()

//         if(digitado == 'sair'){
//             console.clear()
//             console.log("Seus hobbies são: " )
//             let num = 0
//             hobbies.forEach( function(dado, index){
//                 console.log(`${index}. ${dado} `)
                
//             });
//             process.exit();
//         }else{
//             hobbies.push( digitado )
//             console.clear()
//             console.log('Hobbie adicionado a lista, digite outro hobbie ou SAIR para fechar e mostrar sua lista.')
//         }
        
//     }
// )
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// exercicio 2

console.log('Digite uma frase: ')
process.stdin.on('data', function(data){
    let frase = data.toString().trim()
    // do{
    //     let i = 0 
    //     let f =frase.length
        frase = frase.replace(/ /g,'')   
    //     i++
    // } while( i < f );
    
    if((frase.length % 2) == 0){
        //console.clear()
        console.log("Sua frase tem " +frase.length +" e ele é um numero par de caracteres")

    }
    else {
        //console.clear()
        console.log("Sua frase tem " +frase.length +" e ele é um numero impar de caracteres")

    }
    }
)
