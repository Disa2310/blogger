var mongoose = require('mongoose');

var userschema = new mongoose.Schema({
    fname:{
        type:String
    },
    lname:{
        type:String
    },
    dob:{
        type:String
    },
    contect:{
        type:String
    },
    email:{
        type:String
    },
});

module.exports = mongoose.model("blogger_register",userschema);