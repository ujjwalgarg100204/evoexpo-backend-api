const AdminRouter = require("express").Router();
const {AdminModel} = require("../models/admin");

// for all admins
AdminRouter.route("/")
    .get((req, res) => {
        AdminModel.find({}, (err, foundAdmins) => {
            err ? res.json({err})
                : res.json({
                    foundAdmins
                });
        });
    })
    .post((req, res) => {
        const {name, email, profilePicLink, googleOAuthID} = req.body;
        const newAdmin = new AdminModel({
            name, email, profilePicLink, googleOAuthID,
        });
        newAdmin.save(err => {
            err ? res.json({
                    adminSaved: false,
                    err
                })
                : res.json({
                    adminSaved: true,
                });
        });
    })
    .delete((req, res) => {
        AdminModel.deleteMany(err => {
            err ? res.json({
                    deleteStatus: false,
                    err
                })
                : res.json({
                    deleteStatus: true
                });
        });
    });

// for particular admins
AdminRouter.route("/:id")
    .get((req, res) => {
        const {id: adminID} = req.params;
        AdminModel.findOne({_id: adminID}, (err, foundAdmin) => {
            err ? res.json({
                    err
                })
                : res.json({
                    foundAdmin,
                    err: false,
                });
        });
    })
    .put((req, res) => {
        const {id: adminID} = req.params;
        AdminModel.updateOne(
            {_id: adminID},
            {$set: req.body}, // using req.body directly here, so that whatever parameter needs to updated, will be updated
            {overwrite: true},
            (err, updated) => {
                err ? res.json({
                        isUpdated: false,
                        err
                    })
                    : res.json({
                        isUpdated: true,
                        updated
                    });
            }
        );
    })
    .patch((req, res) => {
        const {id: adminID} = req.params;
        AdminModel.update(
            {_id: adminID},
            {$set: req.body}, // using req.body directly here, so that whatever parameter needs to updated, will be updated
            (err, updated) => {
                err ? res.json({
                        isUpdated: false,
                        err
                    })
                    : res.json({
                        isUpdated: true,
                        updated
                    });
            }
        );
    })
    .delete((req, res) => {
        const {id: adminID} = req.params;
        AdminModel.deleteOne({_id: adminID}, err => {
            err ? res.json({
                    isDeleted: false,
                    err
                })
                : res.json({
                    isDeleted: true,
                });
        });
    });


module.exports.AdminRouter = AdminRouter;