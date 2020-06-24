function verifRole() {
    if (localStorage.getItem("role") === "basic") {
      window.location = "../html/accueil.html";
    }
  }
  
  verifRole();