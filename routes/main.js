const express = require("express")
const router = express.Router()
const middle = require("../middleware/main")
const { registerUser, loginUser} = require("../controllers/main")

// router.post("/addCar", addCar)
// router.get("/getModel/:model", getModel)
// router.post("/searchCar", searchCar)
// router.get("/editCar/:id", editCar)
// router.post("/editCarFinal/:id", editCarFinal)
//
router.post("/registration", middle.validateUser, registerUser);
router.post("/login", loginUser);
// router.get("/getUsers", getUsers)
module.exports = router
