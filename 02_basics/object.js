// singleton



// object literals
// Object.create => constructor way


const mySym=Symbol("key1")

const Jsuser={
    name:"rishu",
    "full_name":"Rishu_agrawal",   // we can't acces it like (Jsuser.full_name)
    age:19,
    // mySym:"myKey1",  worng way 
    [mySym]:"myKey1",
    location:"ranchi",
    email:"rishu.google.com",
    isLoogedIn: false,
    lastLoginDay:["MON","THU"]
}

// console.log(Jsuser.email);  // not a good way 

// console.log(Jsuser["email"]);
// console.log(Jsuser.full_name);  // ho gya?? but sir ne bola tha nhi hoga
//console.log( typeof Jsuser.mySym);  // string but we want dtype symbol

// if you use it like a symbol then use [mySym] like that 

//console.log(typeof Jsuser[mySym]); // iska bhi typeof string aa rha h why??
//console.log( Jsuser) // just look this => Symbol(key1): 'myKey1'

///changinng the value

// Jsuser.email="rishu@microsoft.com"

//Object.freeze(email)
// Jsuser.email="rishu@chatgpt.com" // lekin ab email change nhi hoga 

 // creating function 

Jsuser.greeting = function(){
    console.log("hello js user");
}
Jsuser.greeting2= function(){
    console.log(`hello ${this.name} welcome to ${this.location}`);
}

console.log(Jsuser.greeting()); 
console.log(Jsuser.greeting2()); 

//***********************************************************************************8 */

/* # JavaScript Objects (Brief Notes)

## Objects

* Objects store data in the form of **key-value pairs**.
* Objects can be created using:

  * Object Literal (`{}`)
  * Constructor (`Object.create()`)

## Accessing Object Properties

* Dot notation (`object.key`) is simple and commonly used.
* Bracket notation (`object["key"]`) is used when:

  * The key contains spaces.
  * The key is stored in a variable.
  * The key is a Symbol.

Example:

* `"full_name"` can be accessed using `object["full_name"]`.
* Dot notation cannot be used for keys with spaces.

## Symbols as Object Keys

* Symbols create unique property keys.
* To use a Symbol as a key, wrap it in square brackets while creating the object.
* Access Symbol properties using `object[symbol]`.
* `typeof object[symbol]` returns the type of the **stored value**, not the Symbol itself.
* If the stored value is `"myKey1"`, then `typeof object[symbol]` is `"string"`.

## Updating Object Values

* Object properties can be modified using assignment.
* Example: updating an email or location.

## Object.freeze()

* `Object.freeze(object)` makes an object immutable.
* After freezing, properties cannot be added, removed, or modified.

## Adding Functions (Methods)

* Functions can be stored inside objects.
* Such functions are called **methods**.
* Methods can access object properties.

## this Keyword

* `this` refers to the current object.
* It allows a method to access properties of the same object.
* Example:

  * `this.name`
  * `this.location`

## console.log(method()) vs method()

* `method()` executes the function.
* `console.log(method())` prints the function's return value.
* If the function does not return anything, JavaScript prints `undefined`.
* Use only `method()` when the function already prints the output.

## Important Interview Points

* Objects store data as key-value pairs.
* Use bracket notation for keys with spaces and for Symbols.
* Symbols provide unique property keys.
* `Object.freeze()` prevents modification of an object.
* Methods are functions inside objects.
* `this` refers to the current object.
* A function with no `return` statement returns `undefined`.

*/