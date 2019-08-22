// Enter key for email input field         
document.getElementById("email_field").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        ResetPassword();
    }
});

function ResetPassword() {
    // Send Reset Code
    firebase.auth().sendPasswordResetEmail(document.getElementById("email_field").value).then(function() {
        // Email sent.
        document.getElementById("error").className = "error-green";
        document.getElementById("error").innerHTML = "Email Successfully Sent! Check your inbox.";            
        document.getElementById("email_field").value = "";
      }).catch(function(error) {
        // An error happened.
        document.getElementById("error").className = "error-red";
        document.getElementById("error").innerHTML = error.message;  
      });
}

function ShowLogin() {
    window.location.href = "/pages/login/";
}