// array

const arr=[1,2,3,4,5]
console.log(arr[1]);

const heros=["saktiman","naagraj"]

// read : shallow copy and deep copy

// const arr2=new Array(1,2,3,4)
// console.log(arr2)

// ARRAY METHOD

arr.push(7)
arr.push(9)
arr.pop()

// arr.unshift(9) // ye pure aaray ko ek aage shift kr ke 9 ko front mein add kr dega
// console.log(arr); //[ 9, 1, 2, 3,4, 5, 7]
// arr.shift()

// console.log(arr.includes(5)); // if true then it give index else -1
// console.log(arr.includes(25)); 


// const newArr=arr.join()
// console.log(arr); //[ 1, 2, 3, 4, 5, 7 ]
// console.log(newArr);  // 1,2,3,4,5,7


// slice,splice

console.log("A ",arr) // A  [ 1, 2, 3, 4, 5, 7 ]

const myn1=arr.slice(1,3)
console.log(myn1) //[ 2, 3 ]
console.log("B ",arr)  //B  [ 1, 2, 3, 4, 5, 7 ]

const myn2= arr.splice(1,3)
console.log("C ",arr)// //C  [ 1, 5, 7 ]
console.log(myn2); //[ 2, 3, 4]




// # JavaScript Arrays Notes

// ## Arrays

// * Arrays are used to store multiple values in a single variable.
// * Array indexing starts from **0**.

// ## Shallow Copy

// * Creates a copy that shares references with the original object.
// * Changes made to nested objects or arrays affect both copies.

// ## Deep Copy

// * Creates a completely independent copy.
// * Changes in one copy do not affect the other.

// ## Array Methods

// ### push()

// * Adds one or more elements to the **end** of the array.
// * Changes the original array.

// ### pop()

// * Removes the **last** element from the array.
// * Changes the original array.

// ### unshift()

// * Adds one or more elements to the **beginning** of the array.
// * All existing elements shift one position to the right.
// * Changes the original array.

// ### shift()

// * Removes the **first** element from the array.
// * Changes the original array.

// ### includes()

// * Checks whether a particular element exists in the array.
// * Returns **true** if found, otherwise **false**.

// ### indexOf()

// * Returns the index of the specified element.
// * Returns **-1** if the element is not found.

// ### join()

// * Converts all array elements into a single string.
// * By default, elements are separated by commas.
// * Returns a **string**.

// ## slice()

// * Used to extract a portion of an array.
// * The ending index is **not included**.
// * Does **not** modify the original array.
// * Returns a new array.

// ## splice()

// * Used to add, remove, or replace elements in an array.
// * Modifies the original array.
// * Returns the removed elements.

// ## Difference Between slice() and splice()

// | slice()                              | splice()                                          |
// | ------------------------------------ | ------------------------------------------------- |
// | Does not modify the original array   | Modifies the original array                       |
// | End index is excluded                | Second parameter specifies the number of elements |
// | Returns a new array                  | Returns removed elements                          |
// | Used for copying/extracting elements | Used for adding or removing elements              |

// ## Important Interview Points

// * Arrays in JavaScript are dynamic.
// * Array indexing starts from 0.
// * `push()` and `pop()` operate at the end of the array.
// * `unshift()` and `shift()` operate at the beginning of the array.
// * `includes()` returns **true** or **false**.
// * `indexOf()` returns the index or **-1**.
// * `join()` converts an array into a string.
// * `slice()` does not modify the original array.
// * `splice()` modifies the original array.
