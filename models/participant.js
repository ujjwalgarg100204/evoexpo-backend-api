const mongoose = require("mongoose");

const participantSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    profilePicLink: String, // link
    googleOAuthID: String,
    eventsParticipatedIn: Array // should be an array containing unique codes of event
});

module.exports.ParticipantModel = new mongoose.model("Participant", participantSchema);
