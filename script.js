const indice = 9

let a = 1;
let b = 1;
let c = 0;

for (let i = 0; i < indice; i++) {
    a = b
    b = c
    c = a + b;
}

console.log(c);

let factorial = 1

for (let i = 2; i <= indice; i++) {
    factorial = factorial * i
}

console.log(factorial);

let esPrimo = 2

for (let i = 2; i <= indice/2; i++) {
    if (indice%i == 0) {
        esPrimo = esPrimo + 1
    }
    if (esPrimo > 2) {
        break;
    }
}

if (esPrimo == 2) {
    console.log('Primo: ', 'Sí');
} else {
    console.log('Primo: ', 'No');
}
