const passwordBox = document.getElementById("Password");
const length = 12;  // Desired password length

// Character sets for password generation
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbols = "@#$%^&*()_+~|}{[]></-=";

// Combine all character sets for random selection later
const allCharacters = upperCase + lowerCase + number + symbols;

function createPassword() {
  let password = "";
  
  // Ensures that at least one character from each set is included
  password += upperCase[Math.floor(Math.random() * upperCase.length)];  // Add a random uppercase letter
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];  // Add a random lowercase letter
  password += number[Math.floor(Math.random() * number.length)];        // Add a random number
  password += symbols[Math.floor(Math.random() * symbols.length)];      // Add a random symbol
  
  // Continue adding random characters from allCharacter until the password reaches the desired length
  while (password.length < length) {
    password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
  }
  
  // Set the generated password into the input field
  passwordBox.value = password;
}

function copyPassword(){
  
  if(passwordBox.value===''){
    alert("Nothing to select,Generate a Password");
  }else{
    passwordBox.select();
    document.execCommand("copy");
  
  }
}
