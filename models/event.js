const mongoose = require("mongoose");
const {StaffModel} = require("./staff");
const {JobModel} = require("./jobs");

/*
I am going to store all events in another collection, so i need
to know which event belongs to which one, so since, each user gets its
own unique id, i am going to use that
 */
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
