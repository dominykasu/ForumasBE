const valid = require("email-validator")

module.exports = {
    validateUser: (req, res, next) => {

        const {email} = req.body
        const {pass1} = req.body
        const {pass2} = req.body

        if (valid.validate(email)) {
        } else {
            res.send({success: false, message: "Error in your email address..."})
        }
        if (pass1.length > 4 && pass1.length < 20) {

        } else {
            res.send({success: false, message: "Password must be less than 50 symbols and more than 5 symbols..."})
        }
        if (pass1 === pass2) {
            next()
        } else {
            res.send({success: false, message: "Passwords do not match..."})
        }
    },
    validateComment: (req, res, next) => {

        const data = req.body

        if (data.comment.length > 500 || data.comment.length < 5) {
            res.send({success: false, message: "Comment too long or too short..."})
        } else {
            next()
        }
    },
    validateTopic: (req, res, next) => {

        const data = req.body

        if (data.topic.length > 50 || data.topic.length < 5) {
            res.send({success: false, message: "Topic too long or too short..."})
        } else {
            next()
        }
    },
    validateLogin: (req, res, next) => {

        const data = req.body

        if (data.password.length > 50 || data.password.length < 5) {
            res.send({success: false, message: "Password too long or too short..."})
        } else if (!valid.validate(data.email)) {
            res.send({success: false, message: "Error in email field..."})
        } else {
            next()
        }
    },
    validateImage: (req, res, next) => {

        const data = req.body

        let imgUrlRegex = /http[^\s]+(jpg|jpeg|png|tiff)(&(amp;)?[\w\?=]*)?/i;

        if (imgUrlRegex.test(data.profileImage)) {
            next()
        } else {
            res.send({success: false, message: "Link is not an image..."})
        }
    }
}
