// Select the image and input field
const image = document.querySelector("img");
const inputField = document.getElementById("input-field");
const button = document.querySelector(".input-box button");

// Function to perform the Caesar cipher shift
function caesarCipher(str, shift) {
    return str.split('').map(char => {
        if (char >= 'a' && char <= 'z') {
            // Apply the shift to lowercase letters
            return String.fromCharCode(((char.charCodeAt(0) - 97 + shift) % 26) + 97);
        }
        return char;
    }).join('');
}

// Add a double-click event listener to the image
image.addEventListener("dblclick", () => {
    const currentMonth = new Date().getMonth() + 1; // Get the current month (0-indexed)
    inputField.placeholder = `Shift by no. of current month (${currentMonth})`;
});

// Add an event listener for the button click
button.addEventListener("click", () => {
    const userInput = inputField.value.toLowerCase();
    const currentMonth = new Date().getMonth() + 1; // Get the current month (0-indexed)

    // Check if the input is the Caesar-ciphered version of "duck"
    const shiftedWord = caesarCipher("duck", currentMonth);

    if (userInput === shiftedWord) {
        // If the input matches, redirect to secret.html
        window.location.href = "secret.html";
    }
    // If the input is incorrect, do nothing (no feedback or action)
});
