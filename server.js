const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
const sequelize = new Sequelize("jobs_db", "root", "password", {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});
sequelize.authenticate()
    .then(() => console.log('Database connected'))
    .catch(err => console.log('Error' + err))

const app = express();

app.get("/", (req, res) => res.send('INDEX'));

const PORT = process.env.PORT || 3050;


app.listen(PORT, console.log("App listening on PORT " + PORT));