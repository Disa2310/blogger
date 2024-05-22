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
    category:{
        type:String
    },
    
});

module.exports = mongoose.model("blog_category",userschema);