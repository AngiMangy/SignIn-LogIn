// Const Variables
const userInput = document.getElementById("userInput");
const passInput = document.getElementById("passInput");
const username = document.getElementById("username");
const password = document.getElementById("password");
const secWord = document.getElementById("secWord");

// Event Listeners
function signUp(){
    localStorage.setItem("username", username.value);
    localStorage.setItem("password", password.value);
    localStorage.setItem("secWord", secWord.value);
    if (username.value === "" || password.value === "" || secWord.value === ""){
        alert("Sign Up Failed: Please fill in all fields");
        return;
    }
    else if (password.value !== conPassword.value){
        alert("Sign Up Failed: Passwords do not match");
        return;
    }
    else{
        alert("Sign Up Successful, Please Login");
    }
}
function logIn(){
    let storedUsername = localStorage.getItem("username");
    let storedPassword = localStorage.getItem("password");
    if(userInput.value === storedUsername && passInput.value === storedPassword){
        alert("Login Successful");
    }
    else{
        alert("Login Failed: Incorrect Username or Password");
    }
}
function retPassword(){
    let storedSecWord = localStorage.getItem("secWord");
    let retUsername = prompt("Enter your username:");
    let storedUsername = localStorage.getItem("username");
    if(retUsername !== storedUsername){
        alert("Username not found");
        return;
    }
    let userSecWord = prompt("Enter your security word:");
    if(userSecWord === storedSecWord){
        const storedPassword = localStorage.getItem("password");
        alert("Your password is: " + storedPassword);
    }
}