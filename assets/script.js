// Assignment Code
var generateBtn = document.querySelector("#generate");
var length = 12;

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var number = "1234567890";
var symbol = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";


function generatePassword() {
  var allChars = upperCase + lowerCase + number + symbol;

  var password = "";

  for (var i = 0; i < length; i++) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
var generateBtn = document.querySelector("#generate");