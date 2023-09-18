"use strict";

const passwordLengthInput = document.querySelector(".password-length input");
const generatePasswordButton = document.querySelector(".btn");
const passwordDisplay = document.querySelector(".password span");
const copyButton = document.querySelector(".copy");

// Set the default password length to 20
passwordLengthInput.value = 20;

// Check all of the checkboxes
const checkboxes = document.querySelectorAll(".checkbox");
for (const checkbox of checkboxes) {
  checkbox.checked = true;
}

// Generate a password based on the user's inputs
function generatePassword() {
  // Get the user's inputs
  const passwordLength = Number(passwordLengthInput.value);
  const includeUppercase = document.querySelector(".include-uppercase").checked;
  const includeLowercase = document.querySelector(".include-lowercase").checked;
  const includeNumbers = document.querySelector(".include-numbers").checked;
  const includeSymbols = document.querySelector(".include-symbols").checked;

  // Create a character set based on the user's inputs
  let characterSet = "";
  if (includeUppercase) {
    characterSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (includeLowercase) {
    characterSet += "abcdefghijklmnopqrstuvwxyz";
  }
  if (includeNumbers) {
    characterSet += "0123456789";
  }
  if (includeSymbols) {
    characterSet += '!@#$%^&*()_-+={}[]|\\;:"<>,./?';
  }

  // Generate a random password
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    const characterIndex = Math.floor(Math.random() * characterSet.length);
    const character = characterSet[characterIndex];
    password += character;
  }

  return password;
}

// Display the generated password
function displayPassword(password) {
  passwordDisplay.textContent = password;
}

// Copy the generated password to the clipboard
function copyPassword() {
  const password = passwordDisplay.textContent;
  navigator.clipboard.writeText(password);
  alert("Password copied to your clipboard!");
}

// Add event listeners
generatePasswordButton.addEventListener("click", function () {
  const password = generatePassword();
  displayPassword(password);
});
copyButton.addEventListener("click", copyPassword);

// Generate a password initially
const initialPassword = generatePassword();
displayPassword(initialPassword);
