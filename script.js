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