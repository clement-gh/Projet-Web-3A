
let fichier= "";
let response = "";

const tab = [];

document.addEventListener("DOMContentLoaded", () => {
  loadFichier();

});

function loadFichier() {

    
    fetch("./test.txt").then((res) => res.text()).then((text) => {
      fichier = text;

      loadmap();
  });
}



function loadmap() {
  const grille = document.getElementById("grille");
  //grille.innerHTML = '';
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
        map += '<div class="player"></div>';
      }
      else if (tab[i] === "0") {
        map += '<div class="autre"></div>';
      }
    }
    map += '</div>';
    grille.innerHTML += map;

  } 
  getPosition();
  
}


function getPosition(){
let pos =[]
  for (let i = 0; i < tab.length; ++i) {
    for (let j = 0; j < tab[i].length; ++j) {
      if (tab[i][j] == "P"){
      pos.push(i);
      pos.push(j);
      }
      
    }
  }
  
console.log(pos)
  return pos;
}