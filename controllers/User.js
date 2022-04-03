const bcrypt = require("bcrypt")
const userModel = require("../models/userSchema")
const commentModel = require("../models/commentSchema");

module.exports = {
    registerUser: (req, res) => {

        const data = req.body
        console.log(data)

        const user = new userModel()

        // let hash = null

        async function createCrypt() {

            const password = data.pass1
            const hash = await bcrypt.hash(password, 10)

            console.log(hash)

            user.email = data.email
            user.password = hash
            user.notifications = true


            user.save().then(res => {

                console.log("pass saved")
            })
            res.send({success: "user saved"})
        }

        createCrypt()

    },
    loginUser: (req, res) => {

        const data = req.body


        console.log(data)

        async function findUser() {
            const byEmail = await userModel.find({email: data.email})

            // console.log(byEmail[0].password)
            // console.log(data.password)

            const compare = await bcrypt.compare(data.password, byEmail[0].password)

            if (compare) {
                res.send(byEmail[0])

            } else {
                res.send({fail: "pass dont match"})
            }
            // console.log(compare)

        }

        findUser()

    },
    updatePicture: async (req, res) => {
        const data = req.body
        await userModel.findOneAndUpdate({email:data.email},{profileImage:data.profileImage}, {new: true})
        const updatedUser = await userModel.findOne({email:data.email});
        return res.send({success: true,updatedUser: updatedUser})

    },


}