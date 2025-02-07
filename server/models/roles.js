"use strict";

export default (sequelize, DataTypes) =>
  sequelize.define("roles", {
    id: { type: DataTypes.UUID, default: DataTypes.UUID, primaryKey: true },
    name: {
      type: DataTypes.ENUM("customer", "admin", "super_admin"),
      allowNull: false,
      defaultValue: "customer",
    },
  });
