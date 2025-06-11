const mongoose = require("mongoose");

const folderSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Reference to the user
    files: [{ type: mongoose.Schema.Types.ObjectId, ref: "File" }], // Reference to files
}, { timestamps: true });

const Folder = mongoose.model("Folder", folderSchema);

module.exports = Folder;
