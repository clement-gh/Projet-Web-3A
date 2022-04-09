

document.getElementById("nouvellepartie")
        .addEventListener("click", function() {
          niv();
  document.getElementById("menu").hidden = true;
  document.getElementById("game").hidden = false;
   
}, false);

document.getElementById("accueil")
        .addEventListener("click", function() {
          if (confirm("Voulez-vous vraiment quitter la partie ?")) {
            if (confirm("Voulez-vous sauvegarder la progression ? (ok pour sauvegarder)")) {
             
              save();
            }else{ deletesave()}

            document.getElementById("menu").hidden = false;
            document.getElementById("game").hidden = true;
            
           
          }
}, false);

document.getElementById("recommencer") .addEventListener("click", function() {
  if (confirm("Voulez-vous vraiment recommencer la partie ?")) {
    tab=[];
loadFichier(nom);
  }
}, false);



document.getElementById("reprendrepartie")
        .addEventListener("click", function() {
if(saved!=0){

          loadSavedGame();
  document.getElementById("menu").hidden = true;
  document.getElementById("game").hidden = false;
}
else {alert("Commencez par jouer une première partie")}
   
}, false);
