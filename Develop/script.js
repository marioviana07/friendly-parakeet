// Assignment code here



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//arrays of characters 
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


//Ask user 5 questions (confirm password characters, and ask length)
function getUserAnswers() {

  //put choices user chooses into possible characters array 
  var possibleCharacters = []

  //length
  var passwordLength = parseInt(prompt("How many characters would you like to have in your password?"))

  //specialcharacters (confirm)
  var hasSpecialCharacters = confirm("would you like special characters?")

  //numbers (confirm)
  var hasNumbers = confirm("Would you like numbers?")

  //lowercase (confirm)
  var hasLowerCase = confirm("Would you like lower case letters?")

  //uppercase (confirm)
  var hasUpperCase = confirm("Would you like uppercase letters?")

 
  //if the user selects only numbers 
  //then what happens

  //if selects numbers and specialcharacters
  //concat **** possibleCharacters = concat(specialCharacters, numbericCharacters)

  
}



// Write password to the #password input
function writePassword() {
  console.log("hi i am running")

  // var password = generatePassword();

  for (let index = 1; index <= passwordLength; index++) {
    var c = Math.floor((Math.random()*x.length)+0);
    password+= x.charAt(c);
    console.log(password)
  }

  console.log(password);
  document.getElementById ('generate'). innerHTML = '<h1> </h1>';
  
  //var passwordText = document.querySelector("#password")

 // var passwordText.value = password;




}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);