const mongoose = require('mongoose');
const category = new mongoose.Schema({
    id:{
        type:String,
        unique:true,
        required:true,
        max:10
    },
    display:{
        type:String,
        unique:true,
        required:true,
        min:1,
        max:255
    },
    sub:{
        type:Array
    }
});
module.exports = mongoose.model('Category',category);