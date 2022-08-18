// callbacks

// São funções que são passadas para outra função como parametro

const sum =(num1, num2) => num1+num2;

const sub =(num1, num2) => num1-num2;

// Sem callback

// const calculator = (operator, num1, num2); {
//     if (operator==="+") {
//         return sum (num1, num2);
//     } else if (operator === "-") {
//         return sub (num1,num2);
//     }
// }

// Com callback

// const calculatorCallback = (callback, num1, num 2) => callback (num1, num2);

//calculatorCallback(sum, 10, 20);

function calculatorCallback (funcao, num1, num2) {
    const resultCallback = funcao (num1,num2);
}

