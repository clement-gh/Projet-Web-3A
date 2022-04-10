document.addEventListener("keydown", function(event){ //permet de detecter quand une touche est enfoncée
    if(mort == false){
      
        switch (event.key)
        { //appel des fonctions de déplacement presentes dans directions.js 
            //en fontion de la touche pressée
            case 'z' :
            case "ArrowUp":
            
               up();
            break;
            
            case 'q' :
            case "ArrowLeft":    
            
                left();
            break;
                
           
            case 's' : 
            case "ArrowDown":
               
                down()
            break;
              
            case 'd' :
            case "ArrowRight":    
                   
                right();
            break;

            default:
            break;
        }
        
      
        //parcours de la grille
        cpt=0;
        for ( x = 0; x < 32; ++x) {
            for ( y = 0; y < 16; ++y) {

                //gravité auto
                //verification si un rocher est au dessu du vide
                if(document.querySelector("#grille").children[y].children[x].classList.contains("rocher")===true){
                    if(document.querySelector("#grille").children[y+1].children[x].classList.contains("vide")===true) {
                        //actualisation de la grille
                        tab[y+1][x]='R'
                        tab[y][x]='V'
                        document.querySelector("#grille").children[y+1].children[x].className="rocher";
                        document.querySelector("#grille").children[y].children[x].className="vide";
                        //actualisation tu tableau
                    }
                }
                //comptage du nombre de diamants encore présents sur le niveau
                if(document.querySelector("#grille").children[y].children[x].classList.contains("diamant")===true){
                    cpt+=1; 
                }   
            }      
        }
            
        collectionDeDiamant=nbrDiamant-cpt; //calcule à chaque déplacement le nombre de daimants collectés par le joueur
        inputText.innerHTML = collectionDeDiamant;//actualisation du nombre de diamants sur l'ecran
        inputText3.innerHTML = nbrDeplacement; //acctualise le nbr de déplacements du joueur sur l'ecran

        //verification si la partie est gagnée
        if (nbrDiamant===collectionDeDiamant){
            ++niveau ;
            collectionDeDiamant=0;
            tab=[];
            cpt=0;
            //passage au niveau suivant
          
            niv();
       
         }


     x=getX(); y=getY(); //recentrage des coordonnées sur le personnage
    }
    

//recharge le niveau automatiquement après la mort
   if(mort==true){
    setTimeout(function(){ //petmet d'attendre pour avant le rechargement du niveau
        rest();
       loadmap();
    },500);
       
    }

});