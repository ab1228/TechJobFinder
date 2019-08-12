const express = require('express');
const router = express.Router();
var db = require("../models");

router.get("/", (req, res) =>
    db.Job.findAll({})
        .then(dbjobs => {
            console.log(dbjobs);
            res.sendStatus(200);
        })
        .catch(err => console.log(err))
);


module.exports = router;