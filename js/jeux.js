

document.getElementById("nouvellepartie").addEventListener("click", function() {
  niveau =1;//nouvelle partie fait recommancer au  niveau 1
  rest();
  niv();
  deletesave();
          
  document.getElementById("load").hidden = true; // menu de  chargement caché
  document.getElementById("menu").hidden = true; // menu caché
  document.getElementById("game").hidden = false; // jeu visible
  
   
}, false);

document.getElementById("accueil").addEventListener("click", function() {
  if (confirm("Voulez-vous vraiment quitter la partie ?")) {//demande confirmation avant de quitter
    if (confirm("Voulez-vous sauvegarder la progression ? (ok pour sauvegarder)")) { //permet de choisir si on sauvegarde
    save();                                                                           //le niveau en cours
    }else{ deletesave()}

    document.getElementById("menu").hidden = false; //menu visible
    document.getElementById("game").hidden = true; //je caché
    document.getElementById("load").hidden = true; //chargement caché
 }
}, false);

document.getElementById("recommencer") .addEventListener("click", function() {
  if (confirm("Voulez-vous vraiment recommencer la partie ?")) {
    rest();
    loadmap();

  }
}, false);



document.getElementById("reprendrepartie")
        .addEventListener("click", function() {
if(saved!=0){

          loadSavedGame();
  document.getElementById("menu").hidden = true;
  document.getElementById("game").hidden = false;
  document.getElementById("load").hidden = true; //chargement caché
}
else {alert("Commencez par jouer une première partie")}
   
}, false);


document.getElementById("retour")
.addEventListener("click", function() {
  document.getElementById("menu").hidden = false; //menu visible
  document.getElementById("game").hidden = true; //jeu caché
  document.getElementById("load").hidden = true; //chargement caché


}, false);




document.getElementById("chargerniveau").addEventListener("click", function() {

  document.getElementById("menu").hidden = true; //menu caché
  document.getElementById("game").hidden = true; //jeu caché
  document.getElementById("load").hidden = false; //chargement visicle

        }, false);



document.getElementById("play").addEventListener("click", function() {
 
  document.getElementById("load").hidden = true; //chargement caché
  document.getElementById("menu").hidden = true;
  document.getElementById("game").hidden = false;   
  
  run(); //fonction dans loadlevel.js lance le niveau chargé depuis l'extérieur

}, false);