const express = require("express")
const router = express.Router()
const middle = require("../middleware/main")
const {registerUser, loginUser, updatePicture} = require("../controllers/User")
const {
    postTopic,
    postComment,
    getAllTopics,
    getAllComments,
    getMyComments,
    getMyTopics,
    setNotification
} = require("../controllers/Topic")

router.get("/getThreads/:index", getAllTopics);
router.get("/getComments/:index/:getThreadId", getAllComments);
router.get("/getMyComments/:email", getMyComments);
router.get("/getMyTopics/:email", getMyTopics);
router.post("/postComment", middle.validateComment, postComment);
router.get("/setNotification/:id", setNotification);
router.post("/posttopic", middle.validateTopic, postTopic);
router.post("/registration", middle.validateUser, registerUser);
router.post("/login", middle.validateLogin, loginUser);
router.post("/updatePicture", middle.validateImage, updatePicture);

module.exports = router
