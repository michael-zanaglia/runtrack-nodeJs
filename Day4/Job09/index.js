const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
    id : {type : Number, required : true},
    lastname : {type : String, required : true},
    firstname :{type : String, required : true},
    students_number : {type : Number, required : true},
    year_id: {type : mongoose.Schema.Types.Mixed, required : true}
});

const student = mongoose.model('student', studentSchema);

const coll_student = [
    {
        id : 1,
        lastname : 'LeBricoleur',
        firstname : 'Bob',
        students_number : '000001',
        year_id : 1
    },{
        id : 2,
        lastname : 'Doe',
        firstname : 'John',
        students_number : '000002',
        year_id : 2
    },{
        id : 3,
        lastname : 'Dupont',
        firstname : 'Marine',
        students_number : '000003',
        year_id : 3
    }
    
]
// -------------------------------------------------------------------------------

const yearSchema = mongoose.Schema({
    year : {type : String, required : true} 
});

const year = mongoose.model('year', yearSchema);

const coll_year = [
    {
        year : "Bachelor 1"
    },
    {
        year : "Bachelor 2"
    },
    {
        year : "Bachelor 3"
    }
]

mongoose.connect("mongodb://127.0.0.1:27017/LaPlateforme")
    .then(async ()=> {
        console.log("Connecté");
        try {     
            // Suppression --------------
            let res = await student.deleteOne({lastname : "Doe", firstname : "John"}) // si j'ai besoin d'eviter la casse : .deleteOne({lastname : {$regex: "^Doe", $options : "i"}, firstname : {$regex: "^John", $options : "i"}})
            let datas = await student.find()
            console.log("Suppression Réussi :", datas)
                

        } catch(err) {
            console.log("Suppression échoué :", err)
        }
    } )
    .catch((err) => console.log(err, "Pas connecté"))