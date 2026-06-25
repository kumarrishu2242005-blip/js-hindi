//  const score=400
// // console.log(score)  //400

//  const balance=new Number(100)
// // console.log(balance);   // [Number: 100]

// // console.log(balance.toString());  //100
// // // console.log(balance.toNumber());
// // console.log(balance.toString().length); //3

// // console.log(typeof balance)  // objest ??

// // console.log(balance.toFixed(2)) //100.00

//  const otherNumber =23.8966   // 23.8966 => 23.9 while 123.8966=> 123 by toprecision  what about 1123.8966 

// // console.log(otherNumber.toPrecision(3));  //return the string //read mdn

//  const hunderds =1000000
// // console.log(hunderds.toLocaleString('en-IN')); // 10,00,000

// ************************************************************************************


// ==============================
// JavaScript Numbers
// ==============================

// 1. Creating Numbers

const score = 400;              // Primitive Number
const balance = new Number(100); // Number Object (Rarely Used)

console.log(typeof score);      // "number"
console.log(typeof balance);    // "object"

// ====================================================
// Number Methods
// ====================================================

// --------------------
// 1. toString()
// Converts number into string
// --------------------

const num = 100;

console.log(num.toString());          // "100"
console.log(num.toString().length);   // 3

// --------------------
// 2. toFixed()
// Fixes decimal places
// --------------------

const price = 23.4567;

console.log(price.toFixed(2)); // "23.46"
console.log((5).toFixed(2));   // "5.00"

// Used in:
// GST
// Currency
// Ecommerce
// Banking

// --------------------
// 3. toPrecision()
// Total significant digits
// --------------------

console.log((23.8966).toPrecision(3));   // "23.9"
console.log((123.8966).toPrecision(3));  // "124"
console.log((1123.8966).toPrecision(3)); // "1.12e+3"

// Difference:
// toFixed() -> digits after decimal
// toPrecision() -> total significant digits

// --------------------
// 4. toLocaleString()
// Formats numbers
// --------------------

const hundreds = 1000000;

console.log(hundreds.toLocaleString());         // "1,000,000"
console.log(hundreds.toLocaleString("en-IN"));  // "10,00,000"

// ====================================================
// Number Properties
// ====================================================

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

// ====================================================
// Useful Number Functions
// ====================================================

console.log(Number("123"));          // 123
console.log(Number("abc"));          // NaN

console.log(Number.isInteger(10));     // true
console.log(Number.isInteger(10.5));   // false

console.log(Number.isNaN(NaN));        // true
console.log(Number.isFinite(100));     // true

// ====================================================
// parseInt() and parseFloat()
// ====================================================

console.log(parseInt("123.45"));   // 123
console.log(parseFloat("123.45")); // 123.45

// ====================================================
// Special Values
// ====================================================

console.log(10 / 0);    // Infinity
console.log(-10 / 0);   // -Infinity
console.log(Number("abc")); // NaN

// ====================================================
// Scientific Notation
// ====================================================

const scientific = 1.23e3;
console.log(scientific); // 1230

// ====================================================
// Binary, Octal, Hexadecimal
// ====================================================

console.log(0b1010); // 10 (Binary)
console.log(0o12);   // 10 (Octal)
console.log(0xA);    // 10 (Hexadecimal)

// ====================================================
// Quick Revision
// ====================================================

// Primitive Number        -> const num = 100
// Number Object           -> new Number(100)
// toString()              -> Number to String
// toFixed(n)              -> Fixed decimal places
// toPrecision(n)          -> Total significant digits
// toLocaleString()        -> Number formatting
// Number()                -> Convert to Number
// parseInt()              -> Integer conversion
// parseFloat()            -> Decimal conversion
// Number.MAX_VALUE        -> Largest possible number
// Number.MIN_VALUE        -> Smallest positive number
// Number.MAX_SAFE_INTEGER -> Largest safe integer
// Number.MIN_SAFE_INTEGER -> Smallest safe integer
// Number.isInteger()      -> Check integer
// Number.isNaN()          -> Check NaN
// Number.isFinite()       -> Check finite number
// Infinity                -> Positive Infinity
// -Infinity               -> Negative Infinity
// NaN                     -> Not a Number


//************************************************************************* */

// ************MATHS******************

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

// console.log(Math.floor(Math.random() * (max - min + 1))+ min)  //correct way
console.log(Math.floor(Math.random() * (max - min) )+ 1 + min) // wrong way