const process = require('process')

console.log('Digite seu nome:');

process.stdin.on('data', (keyboard) => {
    process.stdout.write(`Saída: ${keyboard}`);
    process.exit();
})