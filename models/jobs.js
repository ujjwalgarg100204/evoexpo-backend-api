const mongoose = require("mongoose");

const jobSchema = mongoose.Schema({
    title: String,
    description: String,
    urgency: String,
    assignedTo: String, // expects a staff member's id
    assignedDate: Date,
    completedDate: Date
});

module.exports.JobModel = new mongoose.model("Job", jobSchema);
