// Intial setup
var generateBtn = document.querySelector("#generate");
var length = 12;

// Setting up characters in the code.
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var number = "1234567890";
var symbol = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

// Generating a password with random character using a for loop 
function generatePassword() {
  var allChars = upperCase + lowerCase + number + symbol;

  var password = "";

  for (var i = 0; i < length; i++) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  return password;
}

// Setting variable password to #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Event listener for when user clicks on the button, a password generates
generateBtn.addEventListener("click", writePassword);
var generateBtn = document.querySelector("#generate");