const express = require("express");
const { connection } = require("./config/connection");
const { Sequelize } = require("sequelize");

const app = express();
const PORT = 3000; // Will change.
connection();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
  }
);

const Traveller = require("./models/Traveller");

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
