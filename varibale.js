// 1. declaration 
// 2. assignment

let age = 25; // number
let price = 19.99;
let gpa = 3.2;

let myName = "Arif"; // string 

let online = true; // boolean

console.log(age);
console.log(price);
console.log(gpa);


console.log(`You are ${age} years old.`); // ${} only works in template literals(``)
console.log("The price is " + price + " $."); // this way works for double quotes
console.log('My GPA is ' + gpa + '.'); // this way works for single quotes

console.log(typeof age); // number
console.log(typeof myName); // string

console.log(myName + "is online: " + online); // this way works for double quotes

console.log("My name is " + myName + "."); // this way works for double quotes

