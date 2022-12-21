// Assignment code here

function inputCheck(input){


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
  var password = [];
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

  //add charset to end of array
  function pushCharset(set){
    for(var i = 0; i< set.length; i++){;
      charset.push(set[i]);
    }


  }

  //generate charset based on inputs
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

  //shuffle algo from stackoverflow
  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }


  //randomize
  shuffle(charset);

  //generate password of size isLength
  for(var i=0; i<isLength; i++){
    var a = Math.random() * ((charset.length) - 0) + 0;
    a = parseInt(a);
    password.push(charset[a]);
  }

  password = password.join('');



  return password; //whatever is returned will be the complete password displayed on screen

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
