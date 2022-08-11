// mahasiswaModel.js

//import mongoose
const mongoose = require('mongoose');

//setup schema
const MasisSchema = mongoose.Schema({
    nim : {
        type : String,
        required : true,
    },
    nama : {
        type : String,
        required : true,
    },
    jurusan : {
        type : String,
        required : true,
    },
    semester : {
        type : String,
        required : true,
    },
    create_date : {
        type : Date,
        default : Date.now,
    },
});

//exports Masis model
const Masis = module.exports = mongoose.model('masis' , MasisSchema);
module.exports.get = function(callback , limit){
    Masis.find(callback).limit(limit);
}