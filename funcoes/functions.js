// Funções

function liquidificador (fruta, liquido) {

    return `seu suco de ${fruta} batido com ${liquido} está pronto.`
}

liquidificador ("morango","leite");

liquidificador; // referência de uma função.
liquidificador("morango","leite"); // Invocação de uma função.

// Parametros de uma função

function sum (goiaba, grampeador){
    return goiaba+grampeador
}

sum (1,2);

// Outras formas de escrever funções

// Clássica - Declaration

function nomeDaFunc (parametros) {
    // escopo
    return "Alguma coisa";
}

// Expression

// Sem arrow

//const declarationFunc=() {
//    return "Alguma coisa";
//}

// Com arrow
const arrowFunc=() => {
    return "Alguma coisa";
}

// Hoisting - Existe diferença prática entre. **

function normal(parametros) {
    return "Algo"
}

const normal = (parametros) => {
    // Escopo da função
    return "Algo"
}

// Se a minha função tiver uma linha e ela quer retornar algo fica mais reduzido.

const normal = () =>"algo";