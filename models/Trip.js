const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Trip extends Model {}

Trip.init(
  {
    trip_id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    trip_budget: {
      type: DataTypes.DECIMAL,
    },
    traveller_amount: {
      type: DataTypes.INTEGER,
    },
    traveller_id: {
      type: DataTypes.STRING,
    },
    location_id: {
      type: DataTypes.STRING,
    },
  },
  { sequelize,
    modelName: "Trip",
    freezeTableName: true }
);

module.exports = Trip;
