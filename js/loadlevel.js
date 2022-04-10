
let text ="";
async function loadFile(file) {
     text = await file.text();

  fichier=text ;
  console.log(fichier)
  
  }
 
  function run(){
    tab=[]
  fichier=text ;
  loadmap();
  }