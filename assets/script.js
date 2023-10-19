// Assignment Code
var length = 12;
var generateBtn = document.querySelector("#generate");

// Character setup
var lowerCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var upperCase = "abcdefghijklmnopqrstuvwxyz";
var letters = "1234567890";
var symbols = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

function generatePassword() {

    // Combining all characters to one variable
    var allChars = lowerCase + upperCase + letters + symbols;
    password = "";

  // Itirating through each character and randomizing the outcome with Math.random
  for (var i = 0; i < length; i++) {
    password += allChars[Math.floor(Math.random() * allChars)];
    return password;
  }
}

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
