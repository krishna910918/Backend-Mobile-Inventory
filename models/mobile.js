const mongoose = require('mongoose');

const mobileSchema = mongoose.Schema({

    name : {
        type : String,
        required  :true
    },

    description : {

        type : String,
        required : true 
    },

    quantity : {
        type : Number,
        default : 1
    },

    brand : {
        type : String,
        required : true
    },

    RAM : {
        type : String,
        required : true
    },

    Storage : {
        type : String,
        required : true
    },

    screen : {
        type : String,
        required : true
    },

    display : {
        type : String,
        required : true
    }
});

module.exports = mongoose.model('Mobile',mobileSchema);