// Traveller model here
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection-other");

class Traveller extends Model {}

Traveller.init(
  {
    traveller_id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Traveller",
  }
);

module.exports = Traveller;