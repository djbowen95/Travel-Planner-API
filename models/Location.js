// Location model here.
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Location extends Model {}

Location.init(
  {
    location_id: { type: DataTypes.UUID, primaryKey: true },
    location_name: { type: DateTypes.STRING, allowNull: false },
  },
  { sequelize, modelName: "location" }
);

module.exports = Location;
