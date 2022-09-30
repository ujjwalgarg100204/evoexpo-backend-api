const ParticipantRouter = require("express").Router();
const {ParticipantModel} = require("../models/participant");

// for all participants
ParticipantRouter.route("/")
    .get((req, res) => {
        ParticipantModel.find({}, (err, foundParticipants) => {
            err ? res.json({err})
                : res.json({
                    foundParticipants
                });
        });
    })
    .post((req, res) => {
        const {name, email, profilePicLink, googleOAuthID} = req.body;
        const newParticipant = new ParticipantModel({
            name, email, profilePicLink, googleOAuthID, eventsParticipatedIn: []
            // when participant logins for the first time, he haven't participated in any event
        });
        newParticipant.save(err => {
            err ? res.json({
                participantSaved: false,
                err
            }) : res.json({
                participantSaved: true,
                err
            });
        });
    })
    .delete((req, res) => {
        ParticipantModel.deleteMany(err => {
            err ? res.json({
                deleteStatus: false,
                err
            }) : res.json({
                deleteStatus: true
            });
        });
    });

// individual participants
ParticipantRouter.route("/:id")
    .get((req, res) => {
        const {id: participantID} = req.params;
        ParticipantModel.findOne({_id: participantID}, (err, foundParticipant) => {
            err ? res.join({err})
                : res.join({
                    foundParticipant,
                });
        });
    })
    .put((req, res) => {
        const {id: participantID} = req.params;
        ParticipantModel.updateOne(
            {_id: participantID},
            {$set: req.body},   // using req.body directly here, so that whatever parameter needs to updated, will be updated
            (err, updated) => {
                err ? res.json({
                    isUpdated: false,
                    err
                }) : res.json({
                    isUpdated: true,
                    updated
                });
            }
        );
    })
    .patch((req, res) => {
        const {id: participantID} = req.params;
        ParticipantModel.updateOne(
            {_id: participantID},
            {$set: req.body},   // using req.body directly here, so that whatever parameter needs to updated, will be updated
            {overwrite: true},
            (err, updated) => {
                err ? res.json({
                    isUpdated: false,
                    err
                }) : res.json({
                    isUpdated: true,
                    updated
                });
            }
        );
    })
    .delete((req, res) => {
        const {id: participantID} = req.params;
        ParticipantModel.deleteOne({_id: participantID}, err => {
            err ? res.json({
                isDeleted: false,
                err
            }) : res.json({isDeleted: true});
        });
    });

module.exports.ParticipantRouter = ParticipantRouter;