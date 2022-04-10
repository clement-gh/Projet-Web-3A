let fichier= "";
let response = "";
let nbrDeplacement =0;
let nbrDiamant =0;
let tab = [];
let niveau =1;
let saved=0;
let mort = false;
let collectionDeDiamant=0;
let inputText = document.getElementById("inputtext");//collection de diams
let inputText2 = document.getElementById("inputtext2");//nbre total de diamant sur le niveau
let inputText3 = document.getElementById("inputtext3");//nbre de déplacements
let nom = "./niveaux/niveau1.txt";


function rest(){
    tab=[];
    mort = false;
    
    collectionDeDiamant=0;
    nbrDeplacement =0;
    inputText.innerHTML =0;
    inputText2.innerHTML =0;
    inputText3.innerHTML = 0;
    nbrDiamant =0;
   // fichier= "";
    
    }