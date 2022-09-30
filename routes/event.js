const EventRouter = require("express").Router()
const {EventModel} = require("../models/event");

// for all events
EventRouter.route("/")
    .get((req, res) => {
        const {userID} = req.body;
        EventModel.find({belongsTo: userID}, (err, foundEvents) => {
            err ? res.json({err})
                : res.json({
                    foundEvents
                });
        });
    })
    .post((req, res) => {
        const {
            belongsTo, // not req
            title,
            type,   // like hackathon, or job fare
            eventAccess,    // public or private
            lengthOfEvent,  // length of event in hours
            startingDate,
            endDate,
            platform,   // online or offline
            venue,  // place like SJT or something
            capacity,
            description,
            imageLink,
            socials,    // link to insta and all
            others  // other properties they might want to enter
        } = req.body;

        const newEvent = new EventModel({
            belongsTo,
            title,
            type,
            startingDate: new Date(startingDate),
            endDate: endDate ? new Date(endDate) : null,
            eventAccess,
            lengthOfEvent,
            platform,
            venue,
            capacity,
            description,
            imageLink,
            socials,
            others
        });
        newEvent.save(err => {
            err ? res.json({
                    eventSaved: false,
                    err
                })
                : res.json({
                    eventSaved: true,
                    newEvent
                })
        });
    })
    .delete((req, res) => {
        EventModel.deleteMany(err => {
            err ? res.json({
                    deleteStatus: false,
                    err
                })
                : res.json({
                    deleteStatus: true,
                });
        });
    });

// do things on a particular event
EventRouter.route("/:id")
    .get((req, res) => {
        const {id: eventID} = req.params;
        EventModel.findOne({_id: eventID}, (err, foundEvent) => {
            err ? res.json({
                    err
                })
                : res.json({
                    foundEvent,
                    err: false
                });
        });
    })
    .put((req, res) => {
        const {id: eventID} = req.params;
        EventModel.update(
            {_id: eventID},
            {$set: req.body},    // using req.body directly here, so that whatever parameter needs to updated, will be updated
            {overwrite: true},
            (err, updated) => {
                err ? res.json({
                        isUpdated: false,
                        err
                    })
                    : res.json({
                        isUpdated: true,
                        updated,
                    });
            }
        );
    })
    .patch((req, res) => {
        const {id: eventID} = req.params;
        EventModel.updateOne(
            {_id: eventID},
            {$set: req.body},    // using req.body directly here, so that whatever parameter needs to updated, will be updated
            (err, updated) => {
                err ? res.json({
                        isUpdated: false,
                        err
                    })
                    : res.json({
                        isUpdated: true,
                        updated,
                    });
            }
        );
    })
    .delete((req, res) => {
        const {id: eventID} = req.params;
        EventModel.deleteOne({_id: eventID}, err => {
            err ? res.json({
                    isDeleted: false,
                    err
                })
                : res.json({
                    isDeleted: true,
                })
        });
    });

module.exports.EventRouter = EventRouter;