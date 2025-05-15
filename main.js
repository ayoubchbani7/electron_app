const { app,BrowserWindow } = require ('electron');
const path = require('path');


// Creation d'une fenetre 
function createWindow(){
    const win = new BrowserWindow({
        width : 1280,
        height : 720,
        webPreferences: {
            preload : path.join(__dirname,"preload.js")
        }

     })
     win.loadFile("index.html");
}

// Quand electron est pret ! 
app.whenReady().then( () => {
    createWindow();

    app.on('activate',()=> {
        if(BrowserWindow.getAllWindows().length == 0 )
            createWindow();
    })
})
// Gestion de la fermeture de toute les fenetre
app.on('window-all-closed',() =>{
    if(process.platform !== 'darwin'){
        app.quit()
    }
})


// Next step:  Besoin de deux fichier preload.js  et index.html