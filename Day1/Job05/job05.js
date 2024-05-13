const path = require("path");

const target = "__job05.js"


const fileName = path.basename(target)
const extension = path.extname(target)
const rep = path.dirname(target)

const chem = path.resolve(rep, fileName)


console.log("Nom du fichier :", fileName)
console.log("Extension du fichier :", extension)
console.log("Chemin du fichier :", chem)