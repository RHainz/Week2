console.log("Oi");

const name1 = "Roger";

let age = 42;

console.log (name1.length);

// Tipos de dados

// Strings

const str="String com aspas duplas";
const str2='String com aspas simples';
const str3=`Dentro de crases - Interpola - meu nome é ${name1}`;
const str4="12";

console.log (str3);

console.log(str.length);
console.log(str3.toUpperCase());
console.log(str3.toLowerCase());

// Numbers

const num=50;

console.log(num*2);

console.log(num+str4);

const condição=true;


if (condição) {
    // se condição for true execute...
} else if (condição) {
    // se condição for true execute...
} else {
    // se a condição for false execute...
} 


// Loops

// Executa pedaço de código enquanto uma condição for verdadeira

const name2 = ["A","L","I","A","M"];
let dado=0;


// for indexado

for(let i=0; i<name2.length;i++) {
    dado=dado+i;
}

console.log(dado);
