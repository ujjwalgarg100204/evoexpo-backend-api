const express = require("express");
const passport = require("passport");

const router = express.Router();

const successLoginUrl = "https://localhost:5000/login/success";
const errorLoginUrl = "https://localhost:5000/login/error";

router.get(
    "/login/google",
    passport.authenticate("google", {scope: ["profile", "email"]})
);

router.get(
    "/auth/google/callback",
    passport.authenticate("google", {
        failureMessage: "Cannot login to Google, please try again",
        failureRedirect: errorLoginUrl,
        successRedirect: successLoginUrl,
    }),
    (req, res) => {
        console.log("Admin: ", req.user);
        res.send("Thank you for signing in!");
    });

module.exports.GoogleAuthenticatorRouter = router;