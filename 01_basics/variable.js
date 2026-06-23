const accountId =12345
let accountEmail ="rishu@gmail.com"
var accountPassword = "1234"
accountCity="Jaipur"
let accountState;  // undefined show hoga output mein 

// accountId =2  // not allowed

accountEmail="rhugei@gmail.com"
accountPassword="835"
accountCity="Ranchi"


console.log(accountId);

console.table([accountEmail,accountId,accountPassword,accountCity,accountState])

// yahan constant ko declare krne ka ek hi tarika h lekin variable ko declare krne ka do tarika h [let or var] but we did not use var

//  prefer not to use var because of issue in block scope and functional scope 

// let and const are block scoped.
// They can only be accessed inside the block {} where they are declared.
// Accessing them outside the block results in a ReferenceError.

// var is function scoped, so it can be accessed outside the block,
// which may cause unexpected behavior and bugs.