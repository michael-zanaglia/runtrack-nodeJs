const fs = require("fs");

const txt = fs.readFileSync('./data.txt', {encoding : "utf8", flag : "r"});

console.log("Contenu du fichier texte :\n" + txt)