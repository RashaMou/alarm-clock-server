const express = require("express");
const app = express();
const Alarms = require("./alarms-model");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});
app.options("*", cors());

app.listen(5000, () => {
    console.log("Server running on port 5000");
});

app.get("/", (req, res) => res.send("Hello from the api!"));

app.get("/alarms", async (req, res) => {
    let allAlarms = await Alarms.findAll();
    try {
        if (allAlarms) {
            res.status(200).json(allAlarms);
        } else {
            res.status(404).json("No alarms to retrieve");
        }
    } catch (error) {
        res.status(500).json(error);
    }
});

app.get("/alarms/:id", async (req, res) => {
    let alarm = await Alarms.findById(req.params.id);
    try {
        if (alarm) {
            res.status(200).json(alarm);
        } else {
            res.status(404).json("No alarm with that id found");
        }
    } catch {
        res.status(500).json("Error retrieving alarm");
    }
});

app.delete("/alarms/:id", (req, res) => {
    Alarms.remove(req.params.id)
        .then((count) => {
            if (count > 0) {
                res.status(200).json(
                    `Alarm with id ${req.params.id} has been removed`
                );
            } else {
                res.status(404).json({
                    message: "The alarm could not be found",
                });
            }
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({
                message: "Error removing alarm",
            });
        });
});

app.post("/alarms", (req, res) => {
    Alarms.add(req.body)
        .then((alarm) => {
            if (alarm) {
                res.status(201).json(alarm);
            } else {
                res.status(401).json("Error adding alarm");
            }
        })
        .catch((err) => {
            res.status(500).json("Database Error");
        });
});
