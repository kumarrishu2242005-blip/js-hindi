//  const tinderUser = new Object()  => ye singleton on=bject hai 
// const tinderUser= {}  => ye non singleton object hai 

const tinderUser= {}
tinderUser.id="123abc"
tinderUser.name="rishu"
tinderUser.isLoogedIn=false

// console.log(tinderUser); // { id: '123abc', name: 'rishu', isLoogedIn: false }
//console.log(Object.keys(tinderUser)); // ye output ek array ke form mein dega and same for values
// console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'rishu' ], [ 'isLoogedIn', false ] ]  // array ke andar array
// console.log(tinderUser.hasOwnProperty('id')); // ture


const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"rishu",
            lastname:"kumar"
        }
    }
}
// console.log(regularUser.fullname);  // { userfullname: { firstname: 'rishu', lastname: 'kumar' } }
// console.log(regularUser.fullname.userfullname); // { firstname: 'rishu', lastname: 'kumar' }

const obj1={
    1:"a",
    2:"b"}
const obj2={
    3:"c",
    4:"d"}

const obj3={obj1,obj2} // isme same array walla problem aa jayega object ke ander object
// console.log(obj3); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// other method .... syntax => const obj4=Object.assign(target,source)  generally hum target mein {} ye de dete h  

const obj4=Object.assign({},obj1,obj2) // here '{}' behave as a target 
//  const obj4=Object.assign({},obj1,obj2) // ye bhi same kaam karega pr isme target obj1 bn jayega 

// console.log(obj4); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// object.assign new object return krna h so construct h new variable 


// best method use spread 

const obj5 = { ...obj1,...obj2}
// console.log(obj5);  // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const users=[
    {id:1,name:"a"},
    {id:2,name:"b"},
    {id:2,name:"c"}
]


//**************************************************************

/* # JavaScript Objects (Part 2) - Brief Notes

## Creating Objects

* Objects can be created in two ways:

  * `new Object()` → Singleton object.
  * `{}` → Object literal (non-singleton).

## Adding Properties

* Properties can be added after object creation.
* Example properties:

  * `id`
  * `name`
  * `isLoggedIn`

## Object Methods

### Object.keys()

* Returns all keys of an object.
* Output type: **Array**

### Object.values()

* Returns all values of an object.
* Output type: **Array**

### Object.entries()

* Returns an array of key-value pairs.
* Output type: **Array of Arrays**
* Format:

  ```
  [[key1, value1], [key2, value2], ...]
  ```

### hasOwnProperty()

* Checks whether an object contains a particular property.
* Returns:

  * `true` if the property exists.
  * `false` otherwise.

---

## Nested Objects

* Objects can contain other objects.
* Nested properties are accessed using multiple dots.
* Example:

  ```
  object.property.subProperty.value
  ```

---

## Combining Objects

### Incorrect Method

* Placing objects directly inside another object creates a nested object.
* Result:

  * Object inside object.
  * Objects are **not merged**.

### Object.assign()

* Used to merge multiple objects into one.
* Syntax:

  ```
  Object.assign(target, source1, source2, ...)
  ```
* Generally `{}` is used as the target so that a **new object** is created.
* The original objects remain unchanged.

### Spread Operator (Recommended)

* Simplest and most commonly used method to merge objects.
* Creates a new merged object.
* Cleaner and easier to read than `Object.assign()`.

---

## Array of Objects

* An array can store multiple objects.
* Each object usually represents one record (e.g., a user).
* Access elements using:

  ```
  array[index]
  ```
* Access object properties using:

  ```
  array[index].property
  ```

---

## Interview Points

* `new Object()` creates a singleton object.
* `{}` creates an object literal.
* `Object.keys()` returns an array of keys.
* `Object.values()` returns an array of values.
* `Object.entries()` returns an array of `[key, value]` pairs.
* `hasOwnProperty()` checks if a property exists.
* Nested objects are accessed using chained dot notation.
* `Object.assign()` merges objects into a new object.
* The spread operator (`...`) is the preferred way to merge objects.
* Arrays can contain objects, which is commonly used for storing collections of data.

*/
