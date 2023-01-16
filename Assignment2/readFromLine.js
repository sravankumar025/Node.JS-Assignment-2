//Rading name from the user

// const { stdin } = require('process');
let readline = require('readline');
let inputOutput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

inputOutput.question('Please enter your name ',(answer)=>{
    console.log('Hello '+answer);
    inputOutput.close();
})