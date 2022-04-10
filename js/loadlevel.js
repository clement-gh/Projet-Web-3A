
let text ="";
async function loadFile(file) {
     text = await file.text();

  fichier=text ;
  console.log(fichier)
  
  }
 
  function run(){
    rest();
  fichier=text ;
  loadmap();
  }