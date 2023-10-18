// Assignment Code
var generateBtn = document.querySelector("#generate");
var length = 12;

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var number = "1234567890";
var symbol = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";


function generatePassword() {
  var password = [
    upperCase[Math.floor(Math.random() * upperCase.length)],
    lowerCase[Math.floor(Math.random() * lowerCase.length)],
    number[Math.floor(Math.random() * number.length)],
    symbol[Math.floor(Math.random() * symbol.length)]
  ].join('');

  var allChars = upperCase + lowerCase + number + symbol;

  for (var i = password.length; i < length; i++) {
    
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
