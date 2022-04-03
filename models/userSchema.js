const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    email:{
        type:String,
        required:true
    },
    profileImage:{
        type:String,
        required:true,
        default: 'https://cdn-icons-png.flaticon.com/128/149/149071.png',
    },
    password:{
        type:String,
        required:true
    },
    notifications:{
        type:Boolean,
        required:true
    }
})


module.exports = mongoose.model('userModel', userSchema)