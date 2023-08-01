"use strict";
const changeColorBtn = document.getElementById("changeColourBtn");
const colours = ["#000000", "#FFFFFF", "#800080", "#8B0000", "#00008B"]; 
            //     black,     white,     purple,     red,       blue
let current = 0;    // Start at white background


// Event listener for button click
changeColorBtn.addEventListener("click", function () {
    current++;
    current = current % colours.length;       // Loop back around
    const newBackgroundColor = colours[current];
    document.body.style.backgroundColor = newBackgroundColor;
    document.body.style.color = (current == 1) ? "#000000" : "#FFFFFF"; // Have black text if background is white
});
