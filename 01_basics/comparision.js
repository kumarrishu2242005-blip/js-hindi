// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);  // ture because "2" is converted into num data type
// console.log("02" > 1); // ture

console.log(null > 0); //false
console.log(null == 0); // false 
console.log(null >= 0); //true

/* THe reason is that an equality check == and comparisions > < <= >= work differently
comparision comvert null to a number ,treating it as 0.
*/

console.log(undefined == 0);  // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false
console.log(undefined <= 0); // false  

// reason : Number(undefined) => NaN but Number(null) => 0

// ===  // ye strictly check krta h (because it also check data type also )

console.log("2" === 2); // false


// NOTES :
// Avoid using == because it performs implicit type conversion.
// Prefer === and !== for predictable results.

// null and undefined behave differently in comparisons.

// Number(null)      => 0
// Number(undefined) => NaN

// null == 0         => false
// null >= 0         => true
// undefined == 0    => false
// undefined >= 0    => false

// === checks both value and data type.