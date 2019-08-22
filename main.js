function SignOut() {
    firebase.auth().signOut();    
  }
  
  firebase.auth().onAuthStateChanged(function(user) {
    if (user != null) {
      // User signed in.
      LoadUI();
    }else {
      // No user is signed in.
      window.location.href = "/pages/login/";
    }
  });

  function LoadUI() {       
    document.getElementById("ui-content").style = "display: block;";
    document.getElementById("body").style = "background-image: none; background-color: lightgrey;";
  }

  function ShowAccounts() {
    window.location.href = "/pages/account/";
  }