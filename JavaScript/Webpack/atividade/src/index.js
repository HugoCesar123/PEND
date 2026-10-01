const saudacao = require('./saudacao');

const mensagem = saudacao('Hugo');

console.log(mensagem);

document.getElementById('mensagem').textContent = mensagem;