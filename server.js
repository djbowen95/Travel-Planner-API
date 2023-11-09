const express = require("express");
const { Sequelize } = require("sequelize");

require("dotenv").config();

const app = express();
const PORT = 3000; // Will change.

const sequelize = new Sequelize(
  'library_db',
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
  }
);

app.listen(PORT, (error) => {
  if (!error) {
    console.log("Successfully listening on PORT" + PORT);
  } else {
    console.log("Error occured, server cannot start.");
    console.log(error);
  }
}); // Need to change this.

try {
  sequelize.authenticate();
  console.log(
    "Connection has been established successfully with the database."
  );
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

// Tell it where to listen
// Start express
