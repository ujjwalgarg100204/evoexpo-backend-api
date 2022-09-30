const ContactRouter = require("express").Router();
const {ContactModel} = require("../models/contact");

ContactRouter.route("/")
    .post((req, res) => {
        const {name, email, message} = req.body;
        const newContact = new ContactModel({
            name, email, message
        });
        newContact.save(err => {
            err ? res.json({
                    contactSaved: false,
                    err
                }) :
                res.json({
                    contactSaved: true,
                    err: null,
                    newContact
                });
        });
    });

module.exports.ContactRouter = ContactRouter;