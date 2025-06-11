const express = require('express')
const router = express.Router();
const fileModel = require('../models/file.model')
const upload = require('../configue/multer.configue')
const auth = require('../controllers/auth');
const cloudinary = require('cloudinary').v2;


router.get('/home', auth, async (req, res) => {
    try {
        // Fetch files for the logged-in user

        const UserFiles = await fileModel.find({
            user: req.user.userId,

        });
        // console.log(req.user)
        // console.log(req.user.Email)
        const username = req.user.Username;
        // Render the template with the files
        res.render('index', {
            username,   // Pass the logged-in user
            files: UserFiles, // Pass the files array
            message: null,    // No message needed if files exist
        });
    } catch (error) {
        console.error("Error fetching user files:", error);
        res.status(500).send("An error occurred while fetching files.");
    }
});


router.post("/home/upload", auth, upload.single("file"), async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: "No file uploaded or unsupported file type." });
    }
    try {
        // The file has been uploaded and stored in Cloudinary
        const fileUrl = req.file.path; // File URL from Cloudinary
        // You can now save file info to your database or respond to the client
        const NewFile = await fileModel.create({
            path: fileUrl,
            originalname: req.file.originalname,
            user: req.user.userId,
        });

        res.json(NewFile); // Respond with the uploaded file data
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error uploading file" });
    }
});

router.get('/download/:path', auth, async (req, res) => {
    try {
        const loggedInUser = req.user.userId;
        const path = req.params.path;

        // Find the file for the logged-in user
        const file = await fileModel.findOne({
            user: loggedInUser,
            path: path,
        });

        // Check if the file exists and belongs to the logged-in user
        if (!file) {
            return res.status(404).json({
                message: "Unauthorized",
            });
        }

        console.log("File found:", file);

        // Generate the signed URL for the file
        const signedUrl = cloudinary.url(file.path, {
            sign_url: true,
            secure: true,
            resource_type: 'auto', // Auto-detect resource type
            transformation: [
                { quality: "auto", fetch_format: "auto" }, // Optimize format and quality
            ],
        });

        // Redirect to the signed URL for downloading the file
        res.redirect(signedUrl);
    } catch (err) {
        console.error("Error downloading file:", err);
        res.status(500).json({ message: "Failed to download the file." });
    }
});
router.get('/user/logout', auth, (req, res) => {
    res.clearCookie('token');
    res.redirect('/user/login');
})



module.exports = router;