const greeting = "Hello, I'm Joseph!";
const textContainer = document.getElementById("text");

let index = 0;
const delay = 1000; 
const textSpeed = 200;

function type() {
    if (index < greeting.length) {
        textContainer.textContent += greeting[index];
        index++;
        setTimeout(type, textSpeed);
    }
    else {
        cursor.style.display = "none";  // Remove cursor when sentence is done
    }
}
// Wait for the initial delay before starting the typing effect
setTimeout(type, delay);
