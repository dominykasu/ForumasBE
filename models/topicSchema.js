const mongoose = require('mongoose')
const Schema = mongoose.Schema

const topicSchema = new Schema({
    // threadId:{
    //     type:String,
    //     required:true
    // },
    topic:{
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
    contentText: {
        type:String,
        required:true
    },
    index: {
        type:Number,
        required:true
    }

})


module.exports = mongoose.model('topicModel', topicSchema)