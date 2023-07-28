"use strict";

const container = document.getElementById("container");
const colour = "#1085a8";
const SQUARES = 400;

for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener("mouseover", () => setColour(square));
    square.addEventListener("mouseout", () => removeColour(square));
    container.appendChild(square);
}

function setColour(element) {
    element.style.background = colour;
    element.style.boxShadow = `0 0 2px ${colour}, 0 0 10px ${colour}`;
}

function removeColour(element) {
    element.style.background = "#1d1d1d";   // Set colour back to background colour
    element.style.boxShadow = "0 0 2px #000";
}
