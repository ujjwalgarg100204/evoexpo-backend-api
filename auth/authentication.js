const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const {ParticipantModel} = require("../models/participant");
const {AdminModel} = require("../models/admin");
const {userSchema} = require("../utils/schemas");

const GOOGLE_CALLBACK_URL = "http://localhost:5000/api/v1/auth/google/callback";

passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_AUTH_CLIENT_ID,
        clientSecret: process.env.GOOGLE_AUTH_CLIENT_SECRET,
        callbackURL: GOOGLE_CALLBACK_URL,
        passReqToCallback: true
    },
    async (req, accessToken, refreshToken, profile, cb) => {
        const defaultAdmin = {
            name: `${profile.name.givenName} ${profile.name.familyName}`,
            email: profile.emails[0].value,
            profilePicLink: profile.photos[0].value,
            googleOAuthID: profile.id,
            eventsParticipatedIn: []
        };
        const newAdmin = new AdminModel(defaultAdmin);

        // if already exists, devise a strategy, if doesn't exist, devise a strategy
        AdminModel.find({googleOAuthID: defaultAdmin.googleOAuthID}, (err, foundAdmin) => {
            if (err) {
                return cb(err, null);
            } else if (foundAdmin) {
                return cb(null, foundAdmin);
            } else {
                // actually create the new admin
                let error = false;
                newAdmin.save(err => {
                    error = err;
                });
                return error ? cb(error, null) : cb(null, newAdmin);
            }
        });
    }
));


passport.serializeUser(((admin, cb) => {
    console.log(`Seriliazing user: ${admin}`);
    cb(null, admin.id);
}));

passport.deserializeUser(async (id, cb) => {
    const admin = await AdminModel.findOne({_id: id}, (err, foundAdmin) => {
        if (err) {
            console.log("error deserializing");
            cb(err, null);
        }
        console.log("Deserialzed admin ", foundAdmin);
        foundAdmin && cb(null, admin);
    });

});