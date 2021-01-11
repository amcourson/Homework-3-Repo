// Assignment Code
var generateBtn = document.querySelector("#generate");
var characters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperChars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
                      "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var characterNum = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
                    "0","1","2","3","4","5","6","7","8","9"];

var uppers = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
                "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
                "0","1","2","3","4","5","6","7","8","9"];
var symbols = ["`","!","@","#","$","%","^","&","*"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword( );
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePasword(){
  var charLength = prompt("How many characters do you want included in your new password?It must be between 8 and 128 characters");
  var uppers = confirm("Would you like uppercase letters?")
  var lowers = confirm("Would you like lowercase letters?")
  var symbols = confirm("Would you like to use special characters?")
  var num = confirm ("Do you want numbers in your password?");
  
let password = ' ';

console.log(charLength);
console.log(num);
console.log(uppers);
console.log(lowers);
console.log(symbols);


return password;
  }}