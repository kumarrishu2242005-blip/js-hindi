const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");  //hitesh50 value 

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);// h
// console.log(gameName.__proto__);  // {}


// console.log(gameName.length); // 13
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));  //t
console.log(gameName.indexOf('t')); //2

const newString = gameName.substring(0, 4)
console.log(newString); //hite

const anotherString = gameName.slice(-13, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-')); // it give array ['hitesh','hc','com]



/* 

| Method        | Example                  | Result          |
| ------------- | ------------------------ | --------------- |
| `length`      | `"abc".length`           | `3`             |
| `charAt()`    | `"abc".charAt(1)`        | `"b"`           |
| `indexOf()`   | `"abc".indexOf('c')`     | `2`             |
| `substring()` | `"hello".substring(0,3)` | `"hel"`         |
| `slice()`     | `"hello".slice(-2)`      | `"lo"`          |
| `trim()`      | `" hi ".trim()`          | `"hi"`          |
| `replace()`   | `"a-b".replace('-','_')` | `"a_b"`         |
| `includes()`  | `"hello".includes("ll")` | `true`          |
| `split()`     | `"a,b,c".split(",")`     | `["a","b","c"]` |

*/

/*  slice 
  const gameName = "hitesh-hc-com";

    Character:  h  i  t  e  s  h  -  h  c  -  c  o  m
    Index:      0  1  2  3  4  5  6  7  8  9 10 11 12

    Character:  h  i  t  e  s  h  -  h  c  -  c  o  m
    Negative: -13 -12 -11 -10 -9 -8 -7 -6 -5 -4 -3 -2 -1

    const anotherString = gameName.slice(-13, 4); here -13 becomes 0

    str.slice(-2) => -2 means start from the 2nd character from the end.

const str = "hitesh";
console.log(str.slice(-1)); // h
console.log(str.slice(-2)); // sh
console.log(str.slice(-3)); // esh
console.log(str.slice(-4)); // tesh
console.log(str.slice(-5)); // itesh
console.log(str.slice(-6)); // hitesh
*/