// Type conversion = converting a datatype from one type to another

let yourAge = window.prompt("How old are you?");
yourAge = Number(yourAge); // convert string to number
yourAge+=1;
console.log(yourAge, typeof yourAge); // Output: 26 number


let p1 = "pizza"; 
let p2 = "pizza";
let p3 = "pizza"; 

p1 = Number(p1); // not a number, until its either 0 or empty string
p2 = String(p2); // is always a string even if its empty
p3 = Boolean(p3); // is false if its empty string, 0, null, undefined, NaN; otherwise true

console.log(p1, typeof p1); 
console.log(p2, typeof p2); 
console.log(p3, typeof p3); 
