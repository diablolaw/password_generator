// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function generatePassword() {
  var len = prompt("What is the length of the password?(8-128)");
  var lower;
  var upper;
  var numeric;
  var special;
  while (len < 8 || len > 128) {
    alert("Invalid Input");
    len = prompt("What is the length of the password?(8-128)");
  }
  passwordInput();
  var charset = "";
  if (lower == 1) {
    charset = charset.concat("abcdefghijklmnopqrstuvwxyz");
  }
  if (upper == 1) {
    charset = charset.concat("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  }
  if (numeric == 1) {
    charset = charset.concat("0123456789");
  }
  if (special == 1) {
    charset = charset.concat("!'#$%&()*+,-./:;<=>?@[]^_`{}|~");
  }

  var password = "";
  for (var i = 0, n = charset.length; i < len; i++) {
    password += charset.charAt(Math.floor(Math.random() * n));
  }
  return password;

  function passwordInput() {
    lower = prompt("Include lowercase? (Input 1 or 0)");
    while (!(lower == 0 || lower == 1)) {
      alert("Invalid Input");
      lower = prompt("Include lowercase? (Input 1 or 0)");
    }

    upper = prompt("Inclue uppercase? (Input 1 or 0)");
    while (!(upper == 0 || upper == 1)) {
      alert("Invalid Input");
      upper = prompt("Include uppercase? (Input 1 or 0)");
    }
    numeric = prompt("Include number? (Input 1 or 0)");
    while (!(numeric == 0 || numeric == 1)) {
      alert("Invalid Input");
      numeric = prompt("Include number? (Input 1 or 0)");
    }
    special = prompt("Include special characters? (Input 1 or 0)");
    while (!(special == 0 || special == 1)) {
      alert("Invalid Input");
      special = prompt("Include special characters? (Input 1 or 0)");
    }

    while (!(lower == 1 || upper == 1 || numeric == 1 || special == 1)) {
      alert("At least one character type should be included");
      passwordInput();
      break;
    }
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
