

document.getElementById("nouvellepartie")
        .addEventListener("click", function() {
  document.getElementById("menu").hidden = true;
  document.getElementById("game").hidden = false;
   
}, false);

document.getElementById("accueil")
        .addEventListener("click", function() {
          if (confirm("Voulez-vous vraiment quitter la partie ?")) {
            document.getElementById("menu").hidden = false;
            document.getElementById("game").hidden = true;
            
           
          }
}, false);

document.getElementById("recommencer") .addEventListener("click", function() {
  if (confirm("Voulez-vous vraiment recommencer la partie ?")) {
loadFichier(nom);
  }
}, false);
