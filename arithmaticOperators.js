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
students6 **= 5; // students = students ** 2




console.log("new number of students after adding: " + students1);
console.log("new number of students after subtracting: " + students2);
console.log("new number of students after multiplying: " + students3);
console.log("new number of students after dividing: " + students4);
console.log("new number of students after remainder modules: " + students5);
console.log("new number of students after exponentiation: " + students6);

/* Operator Precedence
   - Determines the order in which operations are performed
   - Operations with higher precedence are performed before operations with lower precedence
   - Parentheses can be used to override the default precedence
   
   Order of precedence (from highest to lowest):
   1. Parentheses ()
   2. Exponentiation **
   3. Multiplication *, Division /, Modulus %
   4. Addition +, Subtraction -
   5. Assignment operators =, +=, -=, etc.
*/

// Examples of operator precedence
let result1 = 10 + 5 * 2;       // 5 * 2 = 10, then 10 + 10 = 20
let result2 = (10 + 5) * 2;     // 10 + 5 = 15, then 15 * 2 = 30
let result3 = 10 + 20 / 5 - 3;  // 20 / 5 = 4, then 10 + 4 - 3 = 11
let result4 = 2 ** 3 * 4;       // 2 ** 3 = 8, then 8 * 4 = 32

console.log("10 + 5 * 2 =", result1);         // 20
console.log("(10 + 5) * 2 =", result2);       // 30
console.log("10 + 20 / 5 - 3 =", result3);    // 11
console.log("2 ** 3 * 4 =", result4);         // 32

// Complex example
let complex = 8 + 2 * (3 - 1) ** 2 / 4;
// Step 1: (3 - 1) = 2
// Step 2: 2 ** 2 = 4
// Step 3: 2 * 4 = 8
// Step 4: 8 / 4 = 2
// Step 5: 8 + 2 = 10
console.log("8 + 2 * (3 - 1) ** 2 / 4 =", complex); // 10