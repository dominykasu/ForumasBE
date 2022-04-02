const valid = require("email-validator")

module.exports = {
    validateUser:(req,res,next)=>{

        const {email} = req.body
        const {pass1} = req.body
        const {pass2} = req.body


        console.log("reg")
        if(valid.validate(email)){

        } else {
            res.send({error:"email is not valid"})
        }
        if(pass1.length > 4 && pass1.length < 20){

        } else {
            res.send({error:"pass too short or too long"})
        }
        if(pass1 === pass2){
            next()
        } else {
            res.send({error:"pass dont match"})
        }

    }
}