const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
    // threadId:{
    //     type:String,
    //     required:true
    // },
    comment:{
        type:String,
        required:true
    },
    creator:{
        type:String,
        required:true
    },
    date:{
        type:Number,
        required:true
    },
    index:{
        type:Number,
        required:true
    }


})


module.exports = mongoose.model('commentModel', commentSchema)