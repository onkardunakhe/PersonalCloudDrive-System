const UserModel = require('../models/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const LogIn = async (req, res, next) => {
    const { Email, Password } = req.body;
    const user = await UserModel.findOne({
        Email: Email
    })
    if (!user) {
        return res.status(400).json({
            error: "User or Password Is Incorrect",
            message: "User or Password Is Incorrect"
        })
    }
    const isMatch = await bcrypt.compare(Password, user.Password)
    if (!isMatch) {
        return res.status(400).json({
            error: "User or Password Is Incorrect",
            message: "User or Password Is Incorrect"
        })
    }
    const token = jwt.sign({
        userId: user._id,
        Email: user.Email,
        Username: user.Username
    }, process.env.JWT_SECRET)
    // console.log(token)
    res.cookie('token', token)
    next();
}
module.exports = LogIn;