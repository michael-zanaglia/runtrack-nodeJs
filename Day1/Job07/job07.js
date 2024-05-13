const fs = require("fs");

const showFileContent = fs.readFile('./data.txt', "utf8", (err, content) => {
    if (err){
        console.error("Erreur du fichier")
    };
    console.log("Contenu du fichier texte :\n" + content)
});

