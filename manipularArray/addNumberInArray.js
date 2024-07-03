const prompt = require("prompt-sync")({sigint: true})

let addNumberInArray = function(array)
{
    add = Number(prompt())
    if(!isNaN(add)){
        array.push(add)
    }else{
        console.log("O q foi digitado não é considerado numero, tente novamente: ");
        return addNumberInArray(array)
    }
}

module.exports = addNumberInArray;