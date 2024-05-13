const fs = require("fs");


fs.readdir('../', (err, files) => {
    console.log("Contenu du répertoire courant : ")
    files.map((file) => {
        console.log(file)
    })
})