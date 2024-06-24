let alunos = [
    {nome: 'igor' , idade: 16, contato:'(42)99999-9999'},

    {nome: 'felipe' , idade: 18, contato:'(42)99999-8888'},
    
    {nome: 'ana' , idade: 30, contato:'(42)99999-7777'},
    
    {nome: 'pedro' ,idade: 42, contato:'(42)99999-5555'},
    
    {nome: 'gabe' ,idade: 25, contato:'(42)99999-6666'},
]

alunos.forEach(element => {
    if(element.idade > 17){
        console.log(element.nome+ ' é MAIOR de idade.')
    }else{
        console.log(element.nome+' é menor de idade.')
    }

});