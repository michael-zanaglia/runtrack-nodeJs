const mongoose = require("mongoose");


mongoose.connect("mongodb://127.0.0.1:27017/LaPlateforme")
    .then(()=> console.log("Connecté"))
    .catch((err) => console.log(err, "Pas connecté"))