// Init DOM Variables
var emailField = document.getElementById("email_field")
var passwordField = document.getElementById("password_field")
var errorText = document.getElementById("error")

// Enter key for email input field
emailField.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    document.getElementById("login").click();
  }
});

// Enter key for password input field
passwordField.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    document.getElementById("login").click();
  }
});

// Log user into firebase
function login() {
  errorText.className = "error-green";
  errorText.innerHTML = "Signing into account...";
  
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  .then(function() {
    // New sign-in will be persisted with session persistence.    
    return firebase.auth().signInWithEmailAndPassword(emailField.value, passwordField.value);
  })
  .catch(function(error) {
    // Handle Errors here.
    errorText.className = "error-red";
    errorText.innerHTML = error.message;
  });
}

// Log user in and change to new page
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User logged in successfully.
    errorText.className = "error-green";
    errorText.innerHTML = "Signing into account...";
    document.location.href = "/../index.html";
  }
});

function ShowResetPassword() {
  window.location.href = "/pages/reset-password/";
}