// models/admin.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Admin = sequelize.define(
  "Admin",
  {
    idx: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(63),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    company: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    created_date: {
      type: DataTypes.DATE(6),
      allowNull: false,
    },
    updated_date: {
      type: DataTypes.DATE(6),
      allowNull: true,
    },
    latest_login_date: {
      type: DataTypes.DATE(6),
      allowNull: true,
    },
    scope: {
      type: DataTypes.STRING(1023),
      allowNull: true,
    },
  },
  {
    tableName: "admin",
    timestamps: false,
  }
);

module.exports = Admin;
