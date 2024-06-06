"use strict";
console.log("Yay! The javascript is running");

// Set my name in the element with id `name`.
document.getElementById("name").innerText = "Leon";

// Make the text bigger and green.
const bigger = document.getElementById("bigger");
bigger.style.fontSize = "x-large";
bigger.style.color = "#00ff00";

// Replace image with cat.
document.querySelector("img").src = "https://cdn-prd.content.metamorphosis.com/wp-content/uploads/sites/6/2022/12/shutterstock_781327003-1-768x512.jpg";

// Make all squares visible.
const squares = document.getElementsByClassName("square");
for (const square of squares) {
    square.classList.remove("hidden");
}
