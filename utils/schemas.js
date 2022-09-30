module.exports.eventSchema = {
    title: {
        type: String,
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
};

module.exports.userSchema = {
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    profilePicLink: String,
    oauthID: {
        googleID: String,
        linkedinID: String,
        instagramID: String
    }
};

module.exports.roleSchema = {};

module.exports.contactFormSchema = {
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
}
