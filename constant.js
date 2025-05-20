// const = a variable that cannot be changed

const PI = 3.14159;
let radius;
let circumference;


document.getElementById()
radius = Number(radius); // convert string to number



circumference = 2 * PI * radius;

document.getElementById("calculation").onclick = function() {
    document.getElementById("result").innerHTML = "Circumference: " + circumference;
    document.getElementById("calculation").style.display = "none";
    document.getElementById("result").style.display = "block";
}