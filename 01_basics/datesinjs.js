// Dates

let myDate = new Date()
// console.log(myDate.toString());  // Thu Jun 25 2026 16:09:03 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); // Thu Jun 25 2026
// console.log(myDate.toLocaleString()); // 6/25/2026, 4:10:20 PM
// console.log(typeof myDate);  //object

//  let myCreatedDate = new Date(2023, 0, 23)  // 0 => jan (month start with zero index)
//  console.log(myCreatedDate.toDateString())  // Mon Jan 23 2023

// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// console.log(myCreatedDate.toLocaleString());  // 1/23/2023, 5:03:00 AM

// let myCreatedDate = new Date("2023-01-14")
 let myCreatedDate = new Date("01-14-2023")
// // console.log(myCreatedDate.toLocaleString());

// let myTimeStamp = Date.now()
// // console.log(myTimeStamp);

 console.log(myCreatedDate.getTime());  // 1673654400000 => in milisecond
// // console.log(Math.floor(Date.now()/1000));  // in second

// let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// // `${newDate.getDay()} and the time `

// newDate.toLocaleString('default', {
//     weekday: "long",
    
// })


// ==================== JavaScript Date Summary ====================

// 1. Create Current Date & Time
//    let myDate = new Date();
//    - Creates a Date object with the current date and time.
//    - typeof myDate => "object"

// 2. Display Date
//    myDate.toString()       → Full date, time & timezone
//    myDate.toDateString()   → Only date
//    myDate.toLocaleString() → Date & time in local format

// 3. Create Custom Date
//    new Date(2023, 0, 23)
//    - Creates: 23 January 2023
//    - Months are 0-indexed:
//      0=Jan, 1=Feb, 2=Mar, ..., 11=Dec

//    new Date(2023, 0, 23, 5, 3)
//    - Creates: 23 Jan 2023, 5:03 AM

// 4. Create Date from String
//    new Date("2023-01-14")  // YYYY-MM-DD (Recommended)
//    new Date("01-14-2023")  // MM-DD-YYYY

// 5. Current Timestamp
//    Date.now()
//    - Returns current time in milliseconds since
//      1 January 1970 (Unix Epoch).

// 6. Timestamp of a Date
//    myCreatedDate.getTime()
//    - Returns milliseconds for that specific date.

// 7. Convert Milliseconds to Seconds
//    Math.floor(Date.now() / 1000)

// 8. Get Month
//    newDate.getMonth()
//    - Returns month from 0 to 11.
//    - Use getMonth() + 1 for normal month number.

// 9. Get Day
//    newDate.getDay()
//    Returns:
//    0 = Sunday
//    1 = Monday
//    2 = Tuesday
//    3 = Wednesday
//    4 = Thursday
//    5 = Friday
//    6 = Saturday

// 10. Format Date
//    newDate.toLocaleString('default', {
//        weekday: "long"
//    })
//    Output: Thursday

// ==================== Important Methods ====================

// new Date()                  → Current date & time
// toString()                  → Full date & time
// toDateString()              → Only date
// toLocaleString()            → Local date & time
// Date.now()                  → Current timestamp (ms)
// getTime()                   → Timestamp of a date
// getMonth()                  → Month (0–11)
// getDay()                    → Day (0–6)
// Math.floor(Date.now()/1000) → Timestamp in seconds

// ==================== Remember ====================

// ✔ Date is an Object.
// ✔ Months start from 0 (January = 0).
// ✔ Date.now() and getTime() return milliseconds.
// ✔ Divide by 1000 to convert milliseconds into seconds.
// ✔ toLocaleString() displays date and time in a user-friendly format.