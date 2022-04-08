
let test= "test";


const tab = [];

document.addEventListener("DOMContentLoaded", () => {
  loadFichier();

});

function loadFichier() {


    
    console.log('fichier chragé')
}



function loadmap() {
  const grille = document.getElementById("grille");
  grille.innerHTML = '';
  for (let ligne of fichier.split(/\n/)) {
    const tab1 = [];
    for (let i = 0; i < ligne.length; i++) {
      if (ligne[i] === "M") {
        tab1.push("M");
      }
      if (ligne[i] === "T") {
        tab1.push("T");
      }
      if (ligne[i] === "R") {
        tab1.push("R");
      }
      if (ligne[i] === "D") {
        tab1.push("D");
      }
      if (ligne[i] === "V") {
        tab1.push("V");
      }
      if (ligne[i] === "P") {
        tab1.push("P");
      }
      else if (ligne[i] === "0") {
      }
    }
    tab.push(tab1);
  }
  console.log(tab);
  printMap();
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
}





















































/** 


let nbrDiamantCollecté =0;
let compteur =0;

compteur=0;
    for (let i = 0; i < 32; ++i) {
        for (let j = 0; j < 16; ++j) {
            if(document.querySelector("#grille").children[j].children[i].classList.contains('rocher')===true){
                if(document.querySelector("#grille").children[j+1].children[i].classList.contains('vide')===true) {
                    document.querySelector("#grille").children[j+1].children[i].className='rocher';
                    document.querySelector("#grille").children[j].children[i].className='vide';
                }
            }
            if(document.querySelector("#grille").children[j].children[i].classList.contains('diamant')===true){
                compteur+=1;
            }
        }
    }
    nbrDiamantCollecté=nbrDiamant-compteur;
    console.log('nombre de diamant présents = ' + nbrDiamant + ' | nombre de diamant collectés = ' + nbrDiamantCollecté );
    if (nbrDiamant===nbrDiamantCollecté){
        console.log('VICTOIRE');
    } */