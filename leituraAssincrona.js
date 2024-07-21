const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

(async function main() {
    let text = []
    const numerosDeCartas = await askQuestion('vezes:');
  while (true) {
    
    for (let i = 0; i < answer ; i++) {
    let aux = await askQuestion('texto: ');
    text.push(aux)
    }
    
    console.log(`Você digitou: ${answer} vezes`);
    console.log(`Texto digitado: ${text}`);
  }
  
  rl.close();
})();


