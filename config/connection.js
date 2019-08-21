require("dotenv").config()

require("dotenv").config();
// require mysql
var mysql = require('mysql');


var config = {
    host: DB_HOST,
    port: 3306,
    user: DB_USER,
    // grab password from .env
    password: DB_PASS,
    database: DB_NAME
}
var connection;

var host;

if (process.env.JAWSDB_URL) {
    var connection = mysql.createConnection(process.env.JAWSDB_URL);
    host = 'JAWSDB';
} else {
    connection = mysql.createConnection(config);
    host = 'localhost';
}

// connect to database
connection.connect((err) => {
    if (err) {
        console.log("error connecting: " + err.stack);
        return;
    }
    console.log("connected");
});

// export connection
module.exports = conn;

