const marvel_heros=["thors","ironman","spiderman"]
const dc_heros=["superman","flash","batman"]

 marvel_heros.push(dc_heros)

//  console.log(marvel_heros);  // [ 'thors', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// console.log(marvel_heros.length); // 4 
// console.log(marvel_heros[3][1]); //flash



// basically push(array)=> Adds the whole array as one element


// if you want array of size 6 then use concat but concat give new array so make new variable

// const allHeroes = marvel_heros.concat(dc_heros);
// console.log(allHeroes);

// Using Spread Operator

// const allHeroes2 = [...marvel_heros, ...dc_heros]
// console.log(allHeroes2);



const another_arr=[1,2,3,[4,5,6],7,[8,9,[0,1]]]

const real_arr=[...another_arr]
const real_arr2=another_arr.flat(Infinity)

// console.log(real_arr); // [ 1, 2, 3, [ 4, 5, 6 ], 7, [ 8, 9, [ 0, 1 ] ] ]
// console.log(real_arr2); // [1, 2, 3, 4, 5,6, 7, 8, 9, 0,1]

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting (it give empty array (you have to difine key or value but how))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));





//*************************** */

// # JavaScript Arrays Notes (Part 2)

// ## push(array)

// * `push()` adds the entire array as **one single element**.
// * It does **not** merge the arrays.
// * The original array is modified.
// * The length increases by **1**, not by the number of elements in the second array.

// **Example Result:**

// * `["thor", "ironman", "spiderman", ["superman", "flash", "batman"]]`
// * Length becomes **4**.
// * Nested elements are accessed using multiple indices (e.g., first the nested array, then its element).

// ---

// ## concat()

// * Used to combine two or more arrays.
// * Returns a **new array**.
// * Does **not** modify the original arrays.
// * The merged array contains all elements of both arrays.

// ---

// ## Spread Operator (`...`)

// * Expands all elements of an array.
// * Commonly used to merge arrays.
// * Returns a new array.
// * More flexible and preferred over `concat()` in modern JavaScript.

// ---

// ## flat()

// * Used to flatten nested arrays into a single array.
// * Returns a new flattened array.
// * Does **not** modify the original array.

// ### Depth Parameter

// * `flat(1)` → Flattens one level.
// * `flat(2)` → Flattens two levels.
// * `flat(Infinity)` → Flattens all nested levels.

// ---

// ## Array.isArray()

// * Checks whether a value is an array.
// * Returns:

//   * `true` → If the value is an array.
//   * `false` → Otherwise.

// ---

// ## Array.from()

// * Converts iterable or array-like objects into an array.

// Examples:

// * String → Converts each character into an array element.
// * Array-like object → Converts to an array.

// **Important:**

// * Passing a normal object (e.g., `{ name: "hitesh" }`) returns an empty array because JavaScript doesn't know whether to convert the object's **keys** or **values**.
// * Use methods like `Object.keys()` or `Object.values()` if you want an array from an object's keys or values.

// ---

// ## Array.of()

// * Creates a new array from the given arguments.
// * Useful when multiple values need to be placed into an array.

// Example:

// * Input: `100, 200, 300`
// * Output: `[100, 200, 300]`

// ---

// # Difference Between concat() and push()

// | concat()                         | push()                              |
// | -------------------------------- | ----------------------------------- |
// | Returns a new array              | Modifies the original array         |
// | Merges arrays                    | Adds the whole array as one element |
// | Original arrays remain unchanged | Original array changes              |

// ---

// # Difference Between Spread Operator and concat()

// | Spread Operator                      | concat()                    |
// | ------------------------------------ | --------------------------- |
// | Modern and more flexible             | Older method                |
// | Can merge multiple arrays and values | Mainly used to merge arrays |
// | Returns a new array                  | Returns a new array         |

// ---

// # Important Interview Points

// * `push(array)` adds the complete array as a single element.
// * `concat()` merges arrays and returns a new array.
// * The spread operator (`...`) is the preferred modern way to merge arrays.
// * `flat(Infinity)` removes all levels of nesting.
// * `Array.isArray()` checks whether a value is an array.
// * `Array.from()` converts iterable or array-like objects into an array.
// * `Array.of()` creates an array from the given values.
