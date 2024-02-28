// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



//creating a function genratre password, it should return a value which is being stored in var line 24
function generatePassword()
{
  console.log("You clicked the button"); //This is me making sure this function is called and the button is being clicked. 

  var allowed; //This is the array where allowed char will be put into
  var password = "";

  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var numb = "0123456789";
  var specialharacter = "@#$%^&*()-_=+";




  //Asking the user for conditions
  var lenghtmin = prompt ("How much number of Character do you want? between 8 and 128?"); 

  //making sure user picks the correct num of chars
  while (lenghtmin < 8  || lenghtmin > 128) 
  {
    lenghtmin = prompt ("Please enter number between 8 - 128?   How much number of Character do you want? between 8 and 128?"); 
  }



  var includeLow = confirm ("Do you want Lowercase in your password?");
  var includeUpper = confirm ("Do you want Uppercases char in your password?");
  var includeNum = confirm ("Do you want numbers in your password?");
  var includeSpecialChar = confirm ("Do you want special characters in your password?");



  //Checking what the user allowed in their paswd
  if (includeNum){
    allowed = allowed + numb;
    
  }
  
  if (includeUpper){
    allowed = allowed + uppercase;
  
  }
  
  if (includeLow){
    allowed = allowed + lowercase;
  
  }
  
  if (includeSpecialChar){
    allowed = allowed + specialharacter;
  }
  
  


  //Now we need to pick randome allowed char and make a randome paswd
  for (var i = 0; i < lenghtmin; i++) 
  {
      
    password = password +  allowed.charAt(Math.floor(Math.random() * allowed.length)); 
  }
  
    return password;


}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();  //storing the value of passowd in the var password, the genratePassword function is missing
  var passwordText = document.querySelector("#password"); //

  passwordText.value = password; //This is where the pswd is being displayed in the html

}




// Add event listener to generate button, so when the user clikc the gen button it will call the write password function
generateBtn.addEventListener("click", writePassword);
