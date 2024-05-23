const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
    id : {type : Number, required : true},
    lastname : {type : String, required : true},
    firstname :{type : String, required : true},
    students_number : {type : String, required : true},
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
            let datas = await student.find()
            
           // for (let data of datas) {
           //     data.students_number = data.students_number.toString();
           //     await data.save();
           // }
            

            let res = await student.aggregate([
                { $lookup : {
                    from : "years",
                    localField : "year_id",
                    foreignField : "id",
                    as : "cursus"
                }}
            ])
            
            for (let r of res) {
                console.log("Voici", r)
            }
            //student.updateMany({},{})
            console.log("insertion reussi")
        } catch(err) {
            console.log("Probleme lors de l'insertions des datas :", err)
        }
    } )
    .catch((err) => console.log(err, "Pas connecté"))