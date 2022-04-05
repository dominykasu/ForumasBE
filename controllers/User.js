const bcrypt = require("bcrypt")
const userModel = require("../models/userSchema")


module.exports = {
    registerUser: (req, res) => {

        const data = req.body
        const user = new userModel()

        async function createCrypt() {

            const password = data.pass1
            const hash = await bcrypt.hash(password, 10)

            user.email = data.email
            user.password = hash
            user.notifications = true

            user.save().then(res => {
            })
            res.send({success: "user saved"})
        }

        createCrypt()

    },
    loginUser: (req, res) => {

        const data = req.body

        async function findUser() {

            const byEmail = await userModel.findOne({email: data.email})

            if (!byEmail) {
                return res.send({success: false, message: "User not found..."})
            }

            const compare = await bcrypt.compare(data.password, byEmail.password)

            if (compare) {
                res.send({success: true, user: byEmail})

            } else {
                res.send({success: false, message: "Password does not match..."})
            }
        }

        findUser()

    },
    updatePicture: async (req, res) => {
        const data = req.body
        await userModel.findOneAndUpdate({email: data.email}, {profileImage: data.profileImage}, {new: true})
        const updatedUser = await userModel.findOne({email: data.email});
        return res.send({success: true, updatedUser: updatedUser})

    },
}