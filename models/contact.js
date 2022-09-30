// Model and schema for contact form
const mongoose = require("mongoose");

const contactFormSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
});

// exporting the model of contact form
module.exports.ContactModel = new mongoose.model("ContactForm", contactFormSchema);
