const { Workout } = require("../models");

// const express = require("express");

module.exports = function (app) {


    app.get("/api/workouts", (req, res) => {
        Workout.find().then((data) => {
            res.json(data);
        })
            .catch((err) => {
                console.log(err);
                res.json(404);
            })
    });
    app.post("/api/workouts", (req, res) => {
        Workout.create({}).then(function (data) {
            res.json(data);
        })
            .catch(function (err) {
                console.log(err);
                res.json(404);
            })
    });
    app.put("/api/workouts/:id", (req, res) => {
        console.log("testing")
        const id = req.params.id;
        const workout = req.body;
        Workout.findByIdAndUpdate(id, { $push: { exercises: workout } }, { new: true }).then(function (data) {
            console.log("tester")
            res.json(data);
        })
            .catch(function (err) {
                console.log(err);
                res.json(404);
            })
    });
    app.get("/api/workouts/range", (req, res) => {
        Workout.find({}).then(function (data) {
            res.json(data);
        })
            .catch(function (err) {
                console.log(err);
                res.json(404);
            })
    });
}