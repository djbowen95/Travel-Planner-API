const express = require("express");
const sequelize = require("./config/connection");

const Traveller = require("./models/Traveller");
const Location = require("./models/Location");
const Trip = require("./models/Trip");

const app = express();
const PORT = 3000; // Will change.

sequelize.sync({ alter: true }).then(() => {
  app.listen(PORT, (error) => {
    if (!error) {
      console.log("Successfully listening on PORT" + PORT);
    } else {
      console.log("Error occured, server cannot start.");
      console.log(error);
    }
  });
});
