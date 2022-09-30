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
    });

module.exports.ParticipantRouter = ParticipantRouter;