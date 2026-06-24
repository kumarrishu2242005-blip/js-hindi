
let score = "hitesh"  // check for null,undefined,boolean etc.

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// Type Conversion:
// Number()  -> converts value to number
// Boolean() -> converts value to true/false
// String()  -> converts value to string

// Important:
// Number("33")      => 33
// Number("33abc")   => NaN
// Number(true)      => 1
// Number(false)     => 0
// Number(null)      => 0
// Number(undefined) => NaN

// Boolean(1)        => true
// Boolean(0)        => false
// Boolean("")       => false
// Boolean("hitesh") => true


// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// co   nsole.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// Left to right evaluation hoti hai.
// Jahan string mil gayi, uske baad sab string concatenation ban jata hai.

// console.log( (3 + 4) * 5 % 3);

// console.log(+true); //1  (kyunki  Number(true) === 1 )
// console.log(+""); //0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
//++gameCounter;
// gameCounter++;
console.log(gameCounter++); //100
console.log(++gameCounter); //102


// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion


// Arithmetic Operators
// +  Addition
// -  Subtraction
// *  Multiplication
// /  Division
// %  Modulus
// ** Exponentiation

// String Concatenation
// "1" + 2     => "12"
// 1 + "2"     => "12"
// "1" + 2 + 2 => "122"
// 1 + 2 + "2" => "32"

// Unary Plus
// +true => 1
// +""   => 0

// Increment Operators
// ++x => Pre Increment (increment first, then use)
// x++ => Post Increment (use first, then increment)

// Avoid writing confusing expressions like:
// console.log("1" + 2 + 2)
// Use parentheses for clarity.