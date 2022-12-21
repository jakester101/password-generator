// Assignment code here

function inputCheck(input){
  if(input !== 'yes' || input !== no){
    alert('Please only enter yes or no.');
    throw new Error();
  }
  if(typeof input !== 'string'){
    alert('Invalid data type!');
    throw new Error();
  }

  return;
}

function lengthCheck(size){
  if(size < 8 || size > 128){
    alert('Length must fit constraints');
    throw new Error();
  }
  console.log(typeof size);
  console.log(size);
  if(isNaN(size)){
    alert('Invalid data type!');
    throw new Error();
  }
  return;
}


function generatePassword(){

  var password = [];
  var isLength = prompt('How long is your password?','Enter a number between 8 and 128');
  isLength = parseInt(isLength);  //convert the string to int for validation
  lengthCheck(isLength);
  var isUpper = prompt('Does this password contain uppercase?','Enter yes or no');
  inputCheck(isUpper);
  var isLower = prompt('Does this password contain lowercase?','Enter yes or no');
  inputCheck(isLower);
  var isNumbers = prompt('Does this password contain numbers?','Enter yes or no');
  inputCheck(isNumbers);
  var isSpecial = prompt('Does this password contain special characters?','Enter yes or no');
  inputCheck(isSpecial);





  return text; //whatever is returned will be the complete password displayed on screen

}




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
