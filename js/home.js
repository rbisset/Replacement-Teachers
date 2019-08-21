function SignOut() {  
    firebase.auth().signOut();    
  }
  
  firebase.auth().onAuthStateChanged(function(user) {
    if (user != null) {
      // User signed in.
      LoadUI();
    }else {
      // No user is signed in.
      window.location.href = "index.html";
    }
  });

  function LoadUI() {    
    document.getElementById("login_div").style = "display: block;";
  }