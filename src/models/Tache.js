const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Tache = sequelize.define("Tache", {
  titre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  termine: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Tache;
