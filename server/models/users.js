"use strict";

export default (sequelize, DataTypes) =>
  sequelize.define("users", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUID,
    },
    username: { type: DataTypes.STRING(100) },
    email: {
      type: DataTypes.STRING(100),
      unique: true,
      allowNull: false,
    },
    password: { type: DataTypes.STRING(100), allowNull: false },
    phone: { type: DataTypes.STRING(100) },
    role: {
      type: DataTypes.UUID,
      references: { model: "roles", key: "id" },
      onDelete: "CASCADE",
    },
  });
