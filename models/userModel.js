const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide username"],
        unique: [true, "Username already taken"]
    },
    email: {
        type: String,
        required: [true, "Please provide email"],
        unique: [true, "Email already in use"]
    },
    password: {
        type: String,
        required: [true, "Please enter the password"]
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("User", userSchema)