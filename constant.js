// const = a variable that cannot be changed

const PI = 3.14159;
let radius;
let circumference;

document.getElementById("calculate").onclick = function() {
    radius = document.getElementById("radius").value;
    radius = Number(radius); // convert string to number
    circumference = 2 * PI * radius;
    console.log("The circumference is:", circumference);
}
