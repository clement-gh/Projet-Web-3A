function getTab(){
    return tab;
  }
  function getNbreDeplacement(){
    return nbrDeplacement;
  }
  function getNbreDiamant(){
    return nbrDiamant;
  }


//stockage des information de la partie dans le local storage
  function save(){
    
   
    window.localStorage.setItem("tableau", JSON.stringify(getTab()));
    window.localStorage.setItem("diams", JSON.stringify(getNbreDiamant()));
    window.localStorage.setItem("deplacement", JSON.stringify(getNbreDeplacement));
    saved=1;
    
    }
//permet de recuperer le comptenu du local storage
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
    saved=0; //variable permettant de gerer si on a fait ou non une sauvegarde
  
  }


