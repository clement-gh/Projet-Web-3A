
let fichier= "";
let response = "";
let nbrDeplacement =0;
let nbrDiamant =0;
let tab = [];
let niveau =0;
let saved=0;

let nom = "./test.txt";
/** 
document.addEventListener("DOMContentLoaded", () => {
  niv();

});
*/
function niv(){
switch(niveau){
  case 0:
    nom="./niveau1.txt";break;
  case 1:
     nom="./niveau2.txt";break;
  case 3:
    nom="./niveau3.txt";break;





}
loadFichier(nom)
}

function loadFichier(nom) {
  
    
    fetch(nom).then((res) => res.text()).then((text) => {
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

  function getTab(){
    return tab;
  }
  function getNbreDeplacement(){
    return nbrDeplacement;
  }
  function getNbreDiamant(){
    return nbrDiamant;
  }



  function save(){
    
   
    window.localStorage.setItem("tableau", JSON.stringify(getTab()));
    window.localStorage.setItem("diams", JSON.stringify(getNbreDiamant()));
    window.localStorage.setItem("deplacement", JSON.stringify(getNbreDeplacement));
    saved=1;
    
    }

    function loadSavedGame() {
     
        let tabTemp =[];

         tabTemp=window.localStorage.getItem("tableau");
         t=0;
         for (let x = 0; x < 16; ++x) {
          for (let y = 0; y < 32; ++y) {
            tab[x][y]=tabTemp[t]
            ++t;
          }
        }
       nbrDeplacement=localStorage.getItem("deplacement");
       nbrDiamant=localStorage.getItem("diams");
         
      
      
  }

  function deletesave(){

    saved=0;
  
  
  }