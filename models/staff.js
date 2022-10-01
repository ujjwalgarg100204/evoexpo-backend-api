const mongoose = require("mongoose");

const staffSchema = mongoose.Schema({
    name: String,
    email: String,
    jobAssigned: String,
    appointedSince: Date
});

module.exports.StaffModel = new mongoose.model("Staff", staffSchema);
