const { Sequelize } = require("sequelize");
const mysql = require("mysql2/promise");

require("dotenv").config();

const connection = () => {
  mysql
    .createConnection({
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    })
    .then((connection) => {
      connection
        .query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`)
        .then(() => {
          const sequelize = new Sequelize(
            process.env.DB_NAME,
            process.env.DB_USER,
            process.env.DB_PASSWORD,
            {
              host: "localhost",
              dialect: "mysql",
            }
          );

          try {
            sequelize.authenticate();
            console.log(
              "Connection has been established successfully with the database."
            );
          } catch (error) {
            console.error("Unable to connect to the database:", error);
          }
        });
    });
};

module.exports = { connection };
