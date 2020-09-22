const nome = 'Mateus';
const sobrenome = 'Nadal';
const idade = 19;
const peso = 150;
const altura = 1.80;
let imc = peso / (altura * altura);
let anoDeNascimento = 2020 - idade;

console.log(`${nome} ${sobrenome} nasceu em: ${anoDeNascimento} e seu imc é ${imc}`);