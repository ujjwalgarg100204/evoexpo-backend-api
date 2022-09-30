const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    profilePicLink: String, // link to pic
    googleOAuthID: String,
    listOfEvents: Array
});

module.exports.AdminModel = new mongoose.model("Admin", adminSchema);
