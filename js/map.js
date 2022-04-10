
function niv(){
switch(niveau){
  case 1:
    nom="./niveaux/niveau1.txt";break;
  case 2:
     nom="./niveaux/niveau2.txt";break;
  case 3:
    nom="./niveaux/niveau3.txt";break;

}
loadFichier(nom)
rest();
}


//fonction permettant de charger un niveau à partir de son nom en .txt
function loadFichier(nom) {
  
    tab=[]
    fetch(nom).then((res) => res.text()).then((text) => {
      fichier = text;
      
      loadmap();
  });
}


// lit le fichier text et met dans un tableau les lettres lues
function loadmap() {
  const grille = document.getElementById("grille");
  grille.innerHTML = '';

  for (let ligne of fichier.split(/\n/)) {
    const tab2 = [];
    for (let i = 0; i < ligne.length; i++) {
      if (ligne[i] === "M") {
        tab2.push("M");
      }
      if (ligne[i] === "T") {
        tab2.push("T");
      }
      if (ligne[i] === "R") {
        tab2.push("R");
      }
      if (ligne[i] === "D") {
        tab2.push("D");
        nbrDiamant+=1;
      }
      if (ligne[i] === "V") {
        tab2.push("V");
      }
      if (ligne[i] === "P") {
        tab2.push("P");
      }
      else if (ligne[i] === "0") {
      }
    }
    tab.push(tab2);
  }
  inputText2.innerHTML= nbrDiamant;
  printMap();

  //set la position du personnage
  x=getX(); y=getY();
}


//fonction permettant à partir du tableau d'afficher les items sur la page web
function printMap() {
  const grille = document.getElementById("grille");
  grille.innerHTML = '';
  for (let i = 0; i < tab.length; ++i) {
    let map = '<div class="tab">';
    for (let j = 0; j < tab[i].length; ++j) {
      if (tab[i][j] === "M") {
        map += '<div class="mur"></div>';
      }
      if (tab[i][j] === "T") {
        map += '<div class="terre"></div>';
      }
      if (tab[i][j] === "R") {
        map += '<div class="rocher"></div>';
      }
      if (tab[i][j] === "D") {
        map += '<div class="diamant"></div>';
      }
      if (tab[i][j] === "V") {
        map += '<div class="vide"></div>';
      }
      if (tab[i][j] === "P") {
        map += '<div class="joueur"></div>';
      }
      else if (tab[i] === "0") {
        map += '<div class="autre"></div>';
      }
    }
    map += '</div>';
    grille.innerHTML += map;

  } 
  
}

//retourne la position en x du joueur
function getX(){
let pos =0
  for (let x = 0; x < tab.length; ++x) {
    for (let y = 0; y < tab[x].length; ++y) {
      if (tab[x][y] ==="P"){
      pos=x
      
      }
    }
     
  }
  

  return pos;
}
//retourne la position en y du joueur
function getY(){
  let pos=0
  for (let x = 0; x < tab.length; ++x) {
    for (let y = 0; y < tab[x].length; ++y) {
        if (tab[x][y] === "P"){
       
        pos=y
        }
        
      }
    }
    return pos;
  }


