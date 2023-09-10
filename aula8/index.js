
// Ana Paula Fernandes tem 26 anos, pesa 58 Kg, tem 1.57 m, e seu imc é:

const nome = 'Ana Paula';
const sobrenome = 'Fernandes';
const idade = 26;
const peso = 58;
const altura = 1.57;
let imc = peso / (altura * altura);

let anoNascimento = idade - 2023

console.log(imc)
console.log(anoNascimento)

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} Kg, mede ${altura} M e seu IMC é ${imc}`)