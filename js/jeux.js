//let d1 = document.getElementById("logo")

document.getElementById("nouvellepartie")
        .addEventListener("click", function() {
  document.getElementById("menu").hidden = true;
  document.getElementById("game").hidden = false;
   //d1.style.display = "none"; 
}, false);

document.getElementById("accueil")
        .addEventListener("click", function() {
          if (confirm("Voulez-vous vraiment quitter la partie ?")) {
            document.getElementById("menu").hidden = false;
            document.getElementById("game").hidden = true;
            
           // d1.style.display = "flex";
          }
}, false);