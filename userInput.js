// How to take user input in JavaScript

// 1. Easy way to take user input in JavaScript is using prompt() function.
// 2. Professional way to take user input in JavaScript is using HTML form elements like <input>, <select>, <textarea>, etc. and then using JavaScript to get the values from these elements.


/*  let username;
username = window.prompt("What's you name?");
console.log(username); */

document.getElementById("mySubmit").onclick = function() {
    let username = document.getElementById("myText").value;
    document.getElementById("myH2").textContent = "Hello " + username + "!";
}
