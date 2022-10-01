const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
    name: String,
    email: String,
    contactNumber: String,
    profilePicLink: String, // link to pic
    eventCount: Number,
    messages: [String],
    listOfEvents: [String]
});

module.exports.AdminModel = new mongoose.model("Admin", adminSchema);
