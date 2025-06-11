const express = require("express")
const bcrypt = require('bcrypt')
const router = express.Router();
const Uservalidation = require('../controllers/UserValidation')
const UserModel = require('../models/user.model')
const LogIn = require('../controllers/LoginUser')
const auth = require('../controllers/auth')
router.get("/index", (req, res) => {
    res.render("index");
})

router.get("/register", (req, res) => {
    res.render("register")
})

router.post("/register", Uservalidation, (req, res) => {
    // console.log(req.body);
    // Redirect to login page with a query parameter
    res.redirect('/login?message=User%20Created%20Successfully');
});



router.get("/login", (req, res) => {
    res.render('login')
})

router.post("/login", LogIn, (req, res) => {
    res.redirect('/home')
})

router.get('/logout', auth, (req, res) => {
    res.clearCookie('token');
    res.redirect('/login');
})




module.exports = router;