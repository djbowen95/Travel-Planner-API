const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Location extends Model {}

Location.init(
  {
    location_id: { type: DataTypes.UUID, primaryKey: true },
    location_name: { type: DataTypes.STRING, allowNull: false },
  },
  { sequelize, modelName: "Location", freezeTableName: true }
);

module.exports = Location;
