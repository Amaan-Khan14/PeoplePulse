const asyncHandler = require("express-async-handler")
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

//@desc Register A User
//@route POST /api/users/register
//@acces public 

const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        res.status(400);
        throw new Error("All field are mandatory")
    };

    const existingUser = await User.findOne({
        email
    });
    const existingUserName = await User.findOne({
        username
    });

    if (existingUser || existingUserName) {
        if (existingUser) {
            res.status(400);
            throw new Error("Email already in use")
        };
        if (existingUserName) {
            res.status(400);
            throw new Error("Username already taken")
        }
    }

    //hash password
    const hashedPassword = await bcrypt.hash(password, 5);

    const user = await User.create({
        username,
        email,
        password: hashedPassword
    });
    if (user) {
        res.status(201).json({ __id: user.id, email: user.email, username: user.username })
    } else {
        res.status(400);
        throw new Error("User data is invalid")
    }

})

//@desc User Login
//@route POST /api/users/login
//@acces public

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory")
    }
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
        const accessToken = jwt.sign({
            user: {
                username: user.username,
                email: user.email,
                id: user.id
            },
        },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "15m" });
        res.status(200).json({ accessToken,message:"this token will be valid for 15 mins" })
    } else{
        res.status(400);
        throw new Error("Invalid Credentials") 
    }
})

//@desc GET Current User
//@route GET /api/users/current
//@acces private

const currentUser = asyncHandler(async (req, res) => {
    res.json(req.user);
})

module.exports = {
    registerUser,
    loginUser,
    currentUser
};