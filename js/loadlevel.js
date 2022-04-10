
let text ="";

//fonction permettant de transformer le fichier texte en chaine de caractères 
//que l'on pourra mettre dans notre tableau (tab)
async function loadFile(file) {
     text = await file.text();

  fichier=text ; 
 // console.log(fichier)
  
  }
 
  function run(){
    rest();
  fichier=text ;
  loadmap();
  }