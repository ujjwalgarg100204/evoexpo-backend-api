const mongoose = require("mongoose");

/*
I am going to store all events in another collection, so i need
to know which event belongs to which one, so since, each user gets its
own unique id, i am going to use that
 */
const eventSchema = mongoose.Schema({
    belongsTo: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    eventAccess: {
        type: String,   // public or non-public
        required: true
    },
    lengthOfEvent: {
        type: Number,   // length of event of in hour format
        required: true
    },
    type: {
        type: String,
        require: true
    },
    startingDate: {
        type: Date,
        required: true
    },
    endDate: Date,
    platform: {
        type: String,
        required: true
    },
    venue: String,
    capacity: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageLink: String,
    socials: {
        type: Map,
        of: String
    },
    others: {   // as user can give custom fields of event, it is necessary
        type: Map,
        of: String
    }
});

module.exports.EventModel = new mongoose.model("Event", eventSchema);
