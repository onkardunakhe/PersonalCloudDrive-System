const UserModel = require('../models/user.model')
const bcrypt=require('bcrypt')
const ValidationResult = async (req, res, next) => {
    const { Username, Email, Password } = req.body;

    if (Username.length < 3 || typeof Username !== "string") {
        return res.status(400).json({
            error: "Username must be a string and have at least 3 characters",
            message: "Username must be a string and have at least 3 characters"
        });
    }
    if (Email.length < 12 || typeof Email !== "string") {
        return res.status(400).json({
            error: "Email is Not Valid",
            message: "Email Must be string and minimum 5 charchter lentgh"
        });
    }
    if (Password.length < 8 || !/[A-Z]/.test(Password) || !/[a-z]/.test(Password) || !/[0-9]/.test(Password)) {
        return res.status(400).json({
            error: "Password is not valid",
            message: "Password Minimum length 8 should be and at least have one Uppercase,one Lowercase and one number"
        });
    }
    const HashPassword=await bcrypt.hash(Password,10);
    console.log("Valid User", Username);
    const NewUser = await UserModel.create({
        Username, Email,Password:HashPassword
    })
    // res.json(NewUser)
    // alert("User Created Successfully");

    next();
}

module.exports = ValidationResult;