const express = require("express");
const router = express.Router();
const { 
    registerUser,
    loginUser,
    currentUser
 } = require("../controllers/userController");
const toValidateToken = require("../middleware/validToken");

router.route("/register").post(registerUser)
router.route("/login").post(loginUser);
router.route("/current").get(toValidateToken,currentUser);


module.exports = router;