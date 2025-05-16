/* Arithmetic operators 

Basic arithmetic operators: Addition (+) Subtraction (-) Multiplication (*) Division (/) Modulus (%) Exponentiation (**)

Increment/decrement operators: Increment (++) Decrement (--)

Assignment operators: Addition assignment (+=) Subtraction assignment (-=) Multiplication assignment (*=) Division assignment (/=) Modulus assignment (%=)   */


let students1 = 30;
let students2 = 20;
let students3 = 10;
let students4 = 51;
let students5 = 22;
let students6 = 5;

students1 += 5; // students = students + 5
students2 -= 3; // students = students - 2
students3 *= 2; // students = students * 2
students4 /= 2; // students = students / 2
students5 %= 3; // students = students % 3
students6 **= 5; // students = students ** 5 (5^5 = 3125)




console.log("new number of students after adding: " + students1);
console.log("new number of students after subtracting: " + students2);
console.log("new number of students after multiplying: " + students3);
console.log("new number of students after dividing: " + students4);
console.log("new number of students after remainder modules: " + students5);
console.log("new number of students after exponentiation: " + students6);



/* operator precedence: 
 The order of precedence from highest to lowest: 
 1. Parentheses () 
 2. Exponentiation (**)
 3. Multiplication (*), Division (/), Modulus (%)
 4. Addition (+), Subtraction (-)
 5. Assignment operators (=, +=, -=, etc.) */

var result = 1 + 2 * (3 + 4);  // can't declare same variable more than once using let,const , but can declare using var or just normally like result = 1 + 2 * (3 + 4); but it will be in the global scope which is not recommended. 
 console.log("Result of the expression 1 + 2 * (3 + 4): " + result); // Output: 15

var result = 1 + 2 * 3 + 4 / (5 - 1) ** 2;
 console.log("Result of the expression 1 + 2 * 3 + 4 / (5 - 1) ** 2: " + result); // Output: 7.0


let x = 5;  
x++; // Increment x by 1
console.log("Value of x after incrementing: " + x); // Output: 6

let y = 10;
y--; // Decrement y by 1
console.log("Value of y after decrementing: " + y); // Output: 9
