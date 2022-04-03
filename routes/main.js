const express = require("express")
const router = express.Router()
const middle = require("../middleware/main")
const { registerUser, loginUser, updatePicture} = require("../controllers/User")
const { postCategory, postTopic, postComment, getAllTopics, getAllComments} = require("../controllers/Topic")
// router.post("/addCar", addCar)
router.get("/getThreads/:index", getAllTopics)
router.get("/getComments/:index", getAllComments)
router.post("/postComment", postComment)
// router.get("/editCar/:id", editCar)
router.post("/posttopic", postTopic)
//
router.post("/registration", middle.validateUser, registerUser);
router.post("/login", loginUser);
router.post("/updatePicture", updatePicture);
// router.get("/getUsers", getUsers)
module.exports = router
