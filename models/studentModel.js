const mongoose = require('mongoose');




//create student data schma

const studentSchema = mongoose.Schema({


    name :  {
        type  : String,
        required : [true , "name is required"],
        trim : true
    },
    email :  {
        type  : String,
        required : [true , "Email is required"],
        trim : true,
        unique : true
    },
    cell :  {
        type  : String,
        required : [true , "Cell is required"],
        trim : true,
        unique : true
    },
    photo :  {
        type    : String,
        default : 'avatar.png'
    }
     

},{
    timestamps : true
});




//export our model

module.exports = mongoose.model('student', studentSchema);