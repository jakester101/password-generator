// Assignment code here

function inputCheck(input){

  console.log(input);
  if(input !== 'yes' && input !== 'no'){
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
  
  if(isNaN(size)){
    alert('Invalid data type!');
    throw new Error();
  }
  return;
}



function generatePassword(){

  var charset = [];
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

  //we can't have a password with no characters so:
  if(isUpper === 'no' && isLower === 'no' && isNumbers === 'no' && isSpecial === 'no'){
    alert('You must select at least one character set!');
    throw new Error();
  }

  function pushCharset(set){
    for(var i = 0; i< set.length; i++){;
      charset.push(set[i]);
    }

  }

  //begin generation based on parameters
  if(isUpper === 'yes'){
    var upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    pushCharset(upper);
  } 
  if(isLower === 'yes'){
      var lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
      pushCharset(lower);
  }
  if(isNumbers === 'yes'){
      var numset = ['0','1','2','3','4','5','6','7','8','9'];
      pushCharset(numset);
  } 
  if(isSpecial === 'yes'){
      var specialset = ['!','@','#','$','%','^','&','*','(',')','~','-','=','+','_'];
      pushCharset(specialset);
  }

  for(var i=0; i<charset.length; i++){
    console.log(charset[i]);
  }






  return charset; //whatever is returned will be the complete password displayed on screen

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
