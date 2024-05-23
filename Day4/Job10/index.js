const studentSchema = mongoose.Schema({
    id : {type : Number, required : true, unique : true, min : 1},
    lastname : {type : String, required : [true, 'nom obligatoire'], trim : true, minlength : [2, '2 caractères minimum'] },
    firstname :{type : String, required : [true, 'prénom obligatoire'], minlength : [2, '2 caractères minimum']},
    students_number : {type : Number, required : true, unique : true, min : 1},
    year_id: {type : mongoose.Schema.Types.Mixed, required : true}
});

const student = mongoose.model('student', studentSchema);

// ---------------------------- Pour afficher un message personnalise en cas d'erreur ici il s'agit de lastname
//catch (err) {
//    if (err.name === 'ValidationError') {
//        for (let field in err.errors) {
//            console.log(err.errors[field].message);
//        }
//    } else {
//        console.log("Erreur lors de la création de l'étudiant :", err);
//    }
//}