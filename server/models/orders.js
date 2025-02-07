"use strict";

export default (sequelize, DataTypes) =>
  sequelize.define("orders", {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUID,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: { model: "users", key: "id" },
    },
    payments: {
      type: DataTypes.ENUM("STRIKE"),
      allowNull: false,
      defaultValue: "STRIKE",
    },
    status: {
      type: DataTypes.ENUM(
        "PENDING",
        "PROCESSING",
        "SHIPPED",
        "DELIVERED",
        "CANCELLED",
        "RETURNED",
      ),
      allowNull: false,
      defaultValue: "PENDING",
    },
  });
