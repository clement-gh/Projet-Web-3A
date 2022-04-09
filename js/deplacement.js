let x=2;
let y=5;
let nbrDeplacement =0;

console.log(getPosition());

document.addEventListener("keydown", function(event){
    console.log(getPosition());
        switch (event.key)
        {
          
            case 'z' :
                if (document.querySelector("#grille").children[x-1].children[y].classList.contains('rocher')===false){
                    if (document.querySelector("#grille").children[x-1].children[y].classList.contains('mur')===false){
                document.querySelector("#grille").children[x-1].children[y].className="player";
                document.querySelector("#grille").children[x].children[y].className="vide";
                x-=1;
                nbrDeplacement+=1;
                    }
                }
                break;
            
            
            case 'q' :
                if (document.querySelector("#grille").children[x].children[y-1].classList.contains('rocher')===false){
                    if (document.querySelector("#grille").children[x].children[y-1].classList.contains('mur')===false){
                    document.querySelector("#grille").children[x].children[y-1].className="player";
                    document.querySelector("#grille").children[x].children[y].className="vide";
                    y-=1;
                    nbrDeplacement+=1;
                    }
                }
                else if (document.querySelector("#grille").children[x].children[y-1].classList.contains('rocher')===true){
                    if(document.querySelector("#grille").children[x].children[y-2].classList.contains('vide')===true){
                        document.querySelector("#grille").children[x].children[y-2].className="rocher";
                        document.querySelector("#grille").children[x].children[y-1].className="player";
                        document.querySelector("#grille").children[x].children[y].className="vide";
                        y-=1;
                        nbrDeplacement+=1;
                    }
                }
                break;
                
           
            case 's' : 
            if (document.querySelector("#grille").children[x+1].children[y].classList.contains("rocher")===false){
                if (document.querySelector("#grille").children[x+1].children[y].classList.contains("mur")===false){
            document.querySelector("#grille").children[x+1].children[y].className="player";
            document.querySelector("#grille").children[x].children[y].className="vide";
            x+=1;
            nbrDeplacement+=1;
                }
            }
            if (document.querySelector("#grille").children[x-1].children[y].classList.contains('rocher')===true){
                if(document.querySelector("#grille").children[x+1].children[y].classList.contains('rocher')===false){
                    document.querySelector("#grille").children[x].children[y].className='rocher';
                    document.querySelector("#grille").children[x-1].children[y].className='vide';
                    x=0;
                    y=0;
                    console.log('MORT');
                }
            }
                break;
                    
           
            case 'd' :
                if (document.querySelector("#grille").children[x].children[y+1].classList.contains('rocher')===false){
                    if (document.querySelector("#grille").children[x].children[y+1].classList.contains('mur')===false){
                document.querySelector("#grille").children[x].children[y+1].className="player";
                document.querySelector("#grille").children[x].children[y].className="vide";
                y+=1;
                nbrDeplacement+=1;
                    }
                }
                else if (document.querySelector("#grille").children[x].children[y+1].classList.contains('rocher')===true){
                    if(document.querySelector("#grille").children[x].children[y+2].classList.contains('vide')===true){
                        document.querySelector("#grille").children[x].children[y+2].className="rocher";
                        document.querySelector("#grille").children[x].children[y+1].className="player";
                        document.querySelector("#grille").children[x].children[y].className="vide";
                        y+=1;
                        nbrDeplacement+=1;

                    }
                }
                break;
            default:
                break;
        }

    

});