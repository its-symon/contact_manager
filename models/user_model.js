const mongoose = require("mongoose")

const userShcema = mongoose.Schema(
    {
        username: {
            type: String,
            required:[true, "Please add the user name"]
        },
        email: {
            type: String,
            required:[true, "Please add email address"],
            unique: [true, "Email addres already taken"],
        },
        password: {
            type: String,
            required:[true, "Please add the user password"]
        },
    },   
    {
        timestamps: true,
    },

);

module.exports = mongoose.model("User", userShcema)