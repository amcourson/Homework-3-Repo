// Assignment Code
var generateBtn = document.querySelector("#generate");
var characters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var characterNum = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
                    "0","1","2","3","4","5","6","7","8","9"];

var upperNum = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
                "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
                "0","1","2","3","4","5","6","7","8","9"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePasword(){
  var charLength = prompt("How many characters do you want included in your new password?");
  var num = confirm ("Do you want numbers in your password?");

let password = ' ';

console.log(charLength);
console.log(num);

if(charLength === true && num === true) {
  for(var i = 0; i <charLength; i++){
    charPick = upperNum[Math.floor(Math.random()*upperNum.length)];
    console.log(charPick);
    password = password.toString()+charPick.toString();
    console.log(password);
  }
}



return password;
}



