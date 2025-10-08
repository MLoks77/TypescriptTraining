import * as readlineSync from 'readline-sync';

let a:number= parseFloat(readlineSync.question("Entrez le premier nombre : "));
let b:number= parseFloat(readlineSync.question("Entrez le premier nombre : "));

let somme: number = a + b;
let difference: number = a - b;
let produit: number = a * b;
let quotient: number = a / b;

console.log(`les deux nombres sont : a = ${a}, b = ${b}`);
console.log(`somme = `+somme);
console.log(`difference = `+difference);
console.log(`produit = `+produit);
console.log(`quotient = `+quotient);
// autre façon de le faire
// console.log(`somme = ${somme}`);
//  console.log(`difference = ${difference}`);
// console.log(`produit = ${produit}`);
// console.log(`quotient = ${quotient}`);

