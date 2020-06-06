
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
  var passwordLength = prompt("How many characters would you like to have in your password?");
  //for (i=0;i<plength;i++)
  
  //specialcharacters (confirm)
  var hasSpecialCharacters = confirm("would you like special characters?")
  if (specialCharacters) {
    alert('The computer chose ' + specialCharacters);
  }else {

  }

  //numbers (confirm)
  var hasNumbers = confirm("Would you like numbers?")
  if (numericCharacters) {
    alert('The computer chose ' + numericCharacters);
  }else {

  }

  //lowercase (confirm)
  var hasLowerCase = confirm("Would you like lower case letters?")
  if (lowerCasedCharacters) {
    alert('The computer chose ' + lowerCasedCharacters);
  }else {

  }

  //uppercase (confirm)
  var hasUpperCase = confirm("Would you like uppercase letters?")
  if (upperCasedCharacters) {
    alert('The computer chose ' + upperCasedCharacters);
  }else {

  }

 
  //if the user selects only numbers 
  //then what happens

  //if selects numbers and specialcharacters
  //concat **** possibleCharacters = concat(specialCharacters, numbericCharacters)  
}

getUserAnswers();

// Write password to the #password input
function writePassword() {
  console.log("hi i am running")

  // var password = generatePassword();
console.log('PASSWORD TEXT' + passwordText);
  for (var i = 0; i <= passwordText; i++) {
    
  }
  console.log("PasswordText: " + passwordText);
    password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length -1)));
    console.log("password" + password) ;
      console.log("Theses are values at..." + values.charAt(Math.floor(Math.random())));
       console.log("this is ...." + Math.floor(values.length -1) );

  console.log('Password: ' + password);
  document.getElementById ('generate').value = passwordText;
  
  var passwordText = document.querySelector("#password");



}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);