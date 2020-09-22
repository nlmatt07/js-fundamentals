// + Adição, e concatenação
const mais = 5;
const mais2 = 10;

console.log(mais + mais2);

// - Menos
const menos = 5;
const menos2 = 10;

console.log(menos - menos2);

// / Divisão
const divisão = 5;
const divisão2 = 10;

console.log(divisão / divisão2);

// * Multiplicação
const multiplicação = 5;
const multiplicação2 = 10;

console.log(multiplicação * multiplicação2);

// ** Potenciação
const potenciação = 5;
const potenciação2 = 10;

console.log(potenciação ** potenciação2);

// % Resto da divisão
const resto = 10;
const resto2 = 5;

console.log(resto %  resto2);

console.log("----------------------------------");

// Tudo oque estiver entre () vai ser executado primeiro
// Depois **
// Depois *
// Depois / e %
// Depois + e -

const ordem = 5;
const ordem2 = 2;
const ordem3 = 10;

console.log((ordem + ordem2) * ordem3);
console.log("----------------------------------");

//Incremento, pode fazer tambem com --
let contador = 1;
++contador;//2
++contador;//3
++contador;//4
++contador;//5

console.log(contador++);

let contador1 = 1;
console.log(contador1++);
console.log(contador1);