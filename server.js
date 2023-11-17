const express = require("express");
const sequelize = require("./config/connection-other");

const Traveller = require("./models/Traveller");

const app = express();
const PORT = 3000; // Will change.

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, (error) => {
    if (!error) {
      console.log("Successfully listening on PORT" + PORT);
    } else {
      console.log("Error occured, server cannot start.");
      console.log(error);
    }
  });
});
