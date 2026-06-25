//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;  // typeof undefined

const id = Symbol('123')
const anotherId = Symbol('123')  

console.log(id === anotherId); //false (every Symbol is unique.)

// const bigNumber = 3456543576654356754n   // The n at the end makes it a BigInt.



// Reference (Non primitive)

// Array, Objects (in curly bracket (key:value)), Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);
console.log(typeof BigInt);
console.log(typeof myFunction); // Although functions are objects internally, typeof returns "function".
console.log(typeof heros);
console.log(typeof null);

// https://262.ecma-international.org/5.1/#sec-11.4.3



/*
| Value          | `typeof` Output               |
| -------------- | ----------------------------- |
| `"Hello"`      | `"string"`                    |
| `100`          | `"number"`                    |
| `100n`         | `"bigint"`                    |
| `true`         | `"boolean"`                   |
| `undefined`    | `"undefined"`                 |
| `Symbol()`     | `"symbol"`                    |
| `null`         | `"object"` *(historical bug)* |
| `[]`           | `"object"`                    |
| `{}`           | `"object"`                    |
| `function(){}` | `"function"`                  |


*/