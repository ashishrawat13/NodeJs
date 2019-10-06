const mongoose= require('mongoose');
const post_schema=mongoose.Schema({
    name:String,
    age:String,
    city:String

});
module.exports=mongoose.model('user',post_schema);