const express = require("express");
const { connection } = require("./config/connection");

const app =  express();
const PORT = 3000; // Will change.
connection();

app.listen(PORT, (error) => {
  if (!error) {
    console.log("Successfully listening on PORT" + PORT);
  } else {
    console.log("Error occured, server cannot start.");
    console.log(error);
  }
});