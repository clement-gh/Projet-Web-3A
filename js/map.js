
let fichier= "";
let response = "";
let nbrDeplacement =0;
let tab = [];
let tab2 = [];
document.addEventListener("DOMContentLoaded", () => {
  loadFichier();

});

function loadFichier() {
  tab = [];
    
    fetch("./test.txt").then((res) => res.text()).then((text) => {
      fichier = text;
      
      loadmap();
  });
}



function loadmap() {
  const grille = document.getElementById("grille");
  //grille.innerHTML = '';
  for (let ligne of fichier.split(/\n/)) {
     tab2 = [];
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
  
  printMap();
  console.log(tab)
  x=getX(); y=getY();
}



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

  