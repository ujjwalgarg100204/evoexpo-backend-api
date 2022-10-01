const mongoose = require("mongoose");
const {StaffModel} = require("./staff");
const {JobModel} = require("./jobs");

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
    staff: [StaffModel],
    jobs: [JobModel],
    others: [Object]    // mainly should be heading and description
});

module.exports.EventModel = new mongoose.model("Event", eventSchema);
