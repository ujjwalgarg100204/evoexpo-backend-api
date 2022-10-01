const mongoose = require("mongoose");

const participantSchema = mongoose.Schema({
    name: String,
    email: String,
    profilePicLink: String, // link to image
    eventCount: Number,
    eventsParticipatedIn: [String] // should be an array containing id
});

module.exports.ParticipantModel = new mongoose.model("Participant", participantSchema);
