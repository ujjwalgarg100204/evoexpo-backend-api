const mongoose = require("mongoose");
const {StaffSchema} = require("./staff");
const {JobSchema} = require("./jobs");

const eventSchema = mongoose.Schema({
    adminID: String,
    title: String,
    imageLink: String,
    publicOrPrivate: String,
    socials: Object,
    type: String,
    startingDate: Date,
    endDate: Date,
    venue: String,  // actual place or link
    landingPageLink: String,
    capacity: Number,
    currParticipantCount: Number,
    participants: [String],
    staff: [StaffSchema],
    jobs: [JobSchema],
    others: [Object]    // mainly should be heading and desc
});

module.exports.EventModel = new mongoose.model("Event", eventSchema);
