var mongoose = require('mongoose');

var userschema = new mongoose.Schema({
    title:{
        type:String
    },
    description:{
        type:String
    },
    image:{
        type:String
    },
   
});

module.exports = mongoose.model("blogger",userschema);