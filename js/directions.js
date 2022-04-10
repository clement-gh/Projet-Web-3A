function up(){
     //autorise le déplacement si il n'y a pas de mur ou de rocher en haut
     if (document.querySelector("#grille").children[x-1].children[y].classList.contains('rocher' )===false){
        if (document.querySelector("#grille").children[x-1].children[y].classList.contains('mur')===false){
    
         //Déplace le joueur d'une case vers le haut et ajoute du vide là ou etait le joueur
            document.querySelector("#grille").children[x-1].children[y].className="joueur";
            document.querySelector("#grille").children[x].children[y].className="vide";
             //actualisation du tableau 
             tab[x-1][y]='P'
             tab[x][y]='V'
             x-=1;
             nbrDeplacement+=1;
        }
   }
}

function down(){
     //permet de verifier si un rocher se trouve au dessus et si l'on vas  en bas le rocher tombe et on meurt
     if (document.querySelector("#grille").children[x-1].children[y].classList.contains("rocher")===true){
        if(document.querySelector("#grille").children[x+1].children[y].classList.contains("rocher")===false){
            if(document.querySelector("#grille").children[x+1].children[y].classList.contains("mur")===false){

                document.querySelector("#grille").children[x+1].children[y].className="joueur";
                document.querySelector("#grille").children[x].children[y].className="vide";
                x+=1;
                document.querySelector("#grille").children[x-1].children[y].className="rocher";
                document.querySelector("#grille").children[x-2].children[y].className="vide";
                
               document.querySelector("#grille").children[x].children[y].className="rocher";
               document.querySelector("#grille").children[x-1].children[y].className="vide";
                //document.querySelector("#grille").children[x-2].children[y].className="vide";

                
                
                //fonction mort
                mort=true;
            }
        }
    }

      //autorise le déplacement si il n'y a pas de mur ou de rocher en bas
    else if (document.querySelector("#grille").children[x+1].children[y].classList.contains('rocher')===false){
        if (document.querySelector("#grille").children[x+1].children[y].classList.contains('mur')===false){

            //Déplace le joueur d'une case vers le bas et ajoute du vide là ou etait le joueur
            document.querySelector("#grille").children[x+1].children[y].className="joueur";
            document.querySelector("#grille").children[x].children[y].className="vide";
            tab[x+1][y]='P'
            tab[x][y]='V'
            x+=1;
            nbrDeplacement+=1;
        }
    }
}

function left(){
    //autorise le déplacement si il n'y a pas de mur ou de rocher à gauche
    if (document.querySelector("#grille").children[x].children[y-1].classList.contains("rocher")===false){
        if (document.querySelector("#grille").children[x].children[y-1].classList.contains("mur")===false){

            //Déplace le joueur d'une case vers la gauche et ajoute du vide là ou etait le joueur
             document.querySelector("#grille").children[x].children[y-1].className="joueur";
             document.querySelector("#grille").children[x].children[y].className="vide";

            //actualisation du tableau 
            tab[x][y-1]='P'
            tab[x][y]='V'
            y-=1;
            nbrDeplacement+=1;
        }
    }
    //verification pour pousser un rocher
    else if (document.querySelector("#grille").children[x].children[y-1].classList.contains('rocher')===true){
        if(document.querySelector("#grille").children[x].children[y-2].classList.contains('vide')===true){

            //actualisation de la grille et du tableau
            document.querySelector("#grille").children[x].children[y-2].className="rocher";
            tab[x][y-2]='R' 
            document.querySelector("#grille").children[x].children[y-1].className="joueur";
            tab[x][y-1]='P'
            document.querySelector("#grille").children[x].children[y].className="vide";
            tab[x][y]='V'
            y-=1;

            nbrDeplacement+=1;
        }
    }
}

function right(){
    //autorise le déplacement si il n'y a pas de mur ou de rocher à droite
    if (document.querySelector("#grille").children[x].children[y+1].classList.contains("rocher")===false){
        if (document.querySelector("#grille").children[x].children[y+1].classList.contains("mur")===false){
    document.querySelector("#grille").children[x].children[y+1].className="joueur";
    document.querySelector("#grille").children[x].children[y].className="vide";
    //actualisation du tableau
    tab[x][y+1]='P'
    tab[x][y]='V'
    y+=1;
    nbrDeplacement+=1;
        }
    }
    //verification pour pousser un rocher
    else if (document.querySelector("#grille").children[x].children[y+1].classList.contains("rocher")===true){
        if(document.querySelector("#grille").children[x].children[y+2].classList.contains("vide")===true){
            //actualisation de la grille et du tableau
            document.querySelector("#grille").children[x].children[y+2].className="rocher";
            tab[x][y+2]='R'
            document.querySelector("#grille").children[x].children[y+1].className="joueur";
            tab[x][y+1]='P'
            document.querySelector("#grille").children[x].children[y].className="vide";
            tab[x][y]='V'
            y+=1;
            nbrDeplacement+=1;

        }
    }
}