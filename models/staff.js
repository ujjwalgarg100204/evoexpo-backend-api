const mongoose = require("mongoose");

const staffSchema = mongoose.Schema({
    name: String,
    email: String,
    jobAssigned: String,
    newMessages: [String],
    messagesSeen: [String],
    appointedSince: Date
});

module.exports.StaffSchema = staffSchema;
module.exports.StaffModel = new mongoose.model("Staff", staffSchema);
