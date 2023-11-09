const express = require('express');
const { Sequelize } = require('sequelize');

const app = express();
const PORT = 3000; // Will change.

const sequelize = new Sequelize('library_db', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql'
})

app.listen(PORT, (error) => {
    if(!error) {
        console.log("Successfully listening on PORT" + PORT);
    } else {
        console.log("Error occured, server cannot start.");
        console.log(error);
    }
}); // Need to change this. 

// Tell it where to listen
// Start express