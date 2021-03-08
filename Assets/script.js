// Assignment Code
var generateBtn = document.querySelector("#generate");

var password;

//password criteria variables that store the entered strings or values
var passwordLength;
var uppercaseChoice;
var lowercaseChoice;
var numberChoice;
var specialCharactersChoice;

//variables to hold characters
var lowerCaseLetters = "abcdefghijklmnopqrstuvwrxyz"
var capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialCharacters = "!@#$%&&*+=_";



function generatePassword(lenght, characters){
  var password = "";

    for (var i=1; i<lenght; i++){
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
    

  }


function writePassword() {
  //window prompt asking for number of characters 8-128

  passwordLength = window.prompt("Pick a length for your password between 8 and 128.");
  
  //if the choise doesn't meet the parameters

  if (passwordLength < 8 ){
    window.alert("You must choose a lenght between 8 and 128")
    passwordLength = window.prompt("Pick a length for your password between 8 and 128.");
  }

  if (passwordLength > 128 ){
    window.alert("You must choose a lenght between 8 and 128")
    passwordLength = window.prompt("Pick a length for your password between 8 and 128.");
  }
  //window prompt asking for a capital
  uppercaseChoice = window.prompt("Would you like to include an uppercase letter?");

  if (uppercaseChoice == "yes"){
    window.alert("Uppercase letters included.")
  }
  else{
    window.alert("uppercase letters not included.")
  }


  //window prompt asking for lowercase
  lowercaseChoice = window.prompt("Would you like to include lowercase letters?")
  if (lowercaseChoice == "yes"){
    window.alert("Lowercase letters included.")
  }
  else{
    window.alert("Lowercase letters not included.")
  }


  //window prompt asking for numbers
  numberChoice = window.prompt("Would you like to include numbers?");
  if (numberChoice == "yes"){
    window.alert("Numbers included.")
  }
  else{
    window.alert("Numbers not included.")
  }


  //window prompt asking for special characters
  specialCharactersChoice = window.prompt("Would you like to include special characters?");
  if (specialCharactersChoice == "yes"){
    window.alert(" Special character included.")
  }
  else{
    window.alert("Special characters not included.")
  }


//CREATE A SERIES OF IF STATEMENTS TO GENERATE A RANDOM PASSOWRD
 //if they just want lowercase

 if (lowercaseChoice == "yes"){
    password = generatePassword(passwordLength, lowerCaseLetters);
 }

 //if they want just uppercase
 if (uppercaseChoice == "yes"){
  password = generatePassword(passwordLength, capitalLetters);
}

//if they want just numbers
if (numberChoice == "yes"){
  password = generatePassword(passwordLength, numbers);
}

//if they want just special characters
if (specialCharactersChoice == "yes"){
  password = generatePassword(passwordLength, specialCharacters);
}
  
 //if they want lowercase and uppercase
 if (lowercaseChoice == "yes" && uppercaseChoice == "yes"){
  password = generatePassword(passwordLength, lowerCaseLetters + capitalLetters);
}
 
//if they want lowercase, uppercase and numbers
if (lowercaseChoice == "yes" && uppercaseChoice == "yes" && numberChoice == "yes"){
  password = generatePassword(passwordLength, lowerCaseLetters + capitalLetters + numbers);
}

//if they want them all
if (lowercaseChoice == "yes" && uppercaseChoice == "yes" && numberChoice == "yes" && specialCharactersChoice == "yes"){
  password = generatePassword(passwordLength, lowerCaseLetters + capitalLetters + numbers + specialCharacters);
}

//if they want lowercase and numbers
if (lowercaseChoice == "yes" && numberChoice == "yes"){
  password = generatePassword(passwordLength, lowerCaseLetters + numbers);
}

//if they want uppercase and numbers
if (uppercaseChoice == "yes" && numberChoice == "yes"){
  password = generatePassword(passwordLength, capitalLetters + numbers);
}
    
//if they want lowercase and special
if (lowercaseChoice == "yes" && specialCharactersChoice == "yes"){
  password = generatePassword(passwordLength, lowerCaseLetters + specialCharacters);
}

//if they want uppercase and special
if (uppercaseChoice == "yes" && specialCharactersChoice == "yes"){
  password = generatePassword(passwordLength, capitalLetters + specialCharacters);
}

//if they want numbers and special
if (numberChoice == "yes" && specialCharactersChoice == "yes"){
  password = generatePassword(passwordLength, numbers + specialCharacters);
}

else{
  window.alert("You must choose at least one type of character!")
  location.reload();
}


  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
