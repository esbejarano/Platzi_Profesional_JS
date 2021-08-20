console.log('Hello typescript');
function add(a: number, b: number): number {
    return a + b;
}

let sum: number = add(1, 2);

let people: Array<string> = [];

enum Color {
    Rojo= "Rojo",
    Verde= "Verde",
    Azul= "Azul",
}

console.log(Color.Azul);
// parametro opcional ?
function fullName(first: string, last: string = "Bejarano"): string{
    return `${first} ${last}`;
}
const erick = fullName("Erick");
console.log(erick);

interface Rectangulo {
    ancho: number;
    alto: number;
    color: Color;
}

let rect: Rectangulo = {
    ancho: 4,
    alto: 6,
    color: Color.Azul    
};
rect.toString = function () {
    return `Rectangulo color ${this.color}`
}
function area(r: Rectangulo): number {
    return r.alto * r.ancho;
}

console.log(area(rect));
console.log(rect);
console.log(rect.toString());
