const indice = 10

let a = 1;
let b = 1;
let c = 0;

for (let i = 0; i < indice; i++) {
    a = b
    b = c
    c = a + b;
    console.log(c);
}
