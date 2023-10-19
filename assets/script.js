// Assignment Code
var generateBtn = document.querySelector("#generate");

// Character setup
var lowerCase = ["A","B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var upperCase = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var letters = [1,2,3,4,5,6,7,8,9,0];
var symbols = ["!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"];

function generatePassword() {

    // Combining all characters to one variable
    allChars = lowerCase + upperCase + letters + symbols;
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
