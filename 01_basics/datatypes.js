"use strict";  // treat all js code as newer version 

// alert(5+5)   // we are using node.js not browser

console.log(3+3)

console.log("rishu")    // here we did not use semicolon but the code work??


let name="rishu"
let age =18
let isLoggedIn=false

// // Primitive Data Types(Primitive values simple aur single values hoti hain.)

// number => range approximately -(2^53 - 1) to +(2^53 - 1)
// bigint => very large integers
// string => text data enclosed in "" or ''
// boolean => true / false
// null => intentional absence of value
// undefined => variable declared but value not assigned
// symbol => unique identifier

// Non-Primitive Data Type (Ye complex data store karte hain.)
// object => collections of key-value pairs

console.log(typeof "rishu")
console.log(typeof name)
console.log(typeof null)  // typeof null returns "object"
                        // This is a known bug in JavaScript since its early versions.
console.log(typeof undefined) //undefined

/*(ans of why we not use ;) JavaScript me semicolon optional hota hai.
 JS engine Automatic Semicolon Insertion (ASI) use karta hai.
 Lekin readability aur bugs avoid karne ke liye semicolon lagana recommended hai.
 */


 // "use strict" JavaScript ko strict mode me chala deta hai.
// Ye common mistakes ko errors me convert karta hai
// aur code ko zyada secure aur predictable banata hai.
