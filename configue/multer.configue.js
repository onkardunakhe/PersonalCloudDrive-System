const multer = require("multer");
const storage = require("../configue/cloudinary.configue");
const upload = multer({ storage
});
module.exports = upload;