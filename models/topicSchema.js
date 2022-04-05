const mongoose = require('mongoose')
const Schema = mongoose.Schema

const topicSchema = new Schema({
    notifications: {
        type: Boolean,
        required: true,
        default: false
    },
    topic: {
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
    index: {
        type: Number,
        required: true
    }
})


module.exports = mongoose.model('topicModel', topicSchema)