"use strict";

export default (sequelize, DataTypes) =>
  sequelize.define("categories", {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUID,
    },
    parent_id: {
      type: DataTypes.UUID,
      references: { model: "categories", key: "id" },
      onDelete: "SET NULL",
    },
    name: { type: DataTypes.CHAR(100), allowNull: false },
  });
