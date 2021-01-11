// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerChars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var numbers = ["0","1","2","3","4","5","6","7","8","9"];

var upperChars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
               
var symbols = ["`","!","@","#","$","%","^","&","*"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword( );
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  var charLength = prompt("How many characters do you want included in your new password?It must be between 8 and 128 characters");
  var upper = confirm("Would you like uppercase letters?")
  var lower = confirm("Would you like lowercase letters?")
  var symbolsOther = confirm("Would you like to use special characters?")
  var numMore = confirm ("Do you want numbers in your password?");
  
let password = '';
let possibleOptions = "";
console.log(charLength);
console.log(numMore);
console.log(upper);
console.log(lower);
console.log(symbolsOther);

if (upper === true){
possibleOptions += upperChars.join("");

}

if (lower === true){
  possibleOptions += lowerChars.join("");
}

if(symbolsOther === true){
  possibleOptions += symbols.join("");
}

if(numMore === true){
  possibleOptions += numbers.join("");
}

console.log(possibleOptions)

for (i = 0; i < parseInt(charLength);i++){
  randomIndex=Math.random()*possibleOptions.length
  randomIndexInteger= parseInt(randomIndex)
  console.log(possibleOptions[randomIndexInteger])
  password += possibleOptions[randomIndexInteger]
}; 
  
return password;
}