const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
    comment: {
        type: String,
        required: true
    },
    creator: {
        type: Object,
        required: true
    },
    date: {
        type: Number,
        required: true
    },
    threadId: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model('commentModel', commentSchema)