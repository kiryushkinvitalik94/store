"use strict";

export default (sequelize, DataTypes) =>
  sequelize.define("product_details", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUID,
    },
    product_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: { model: "products", key: "id" },
      onDelete: "CASCADE",
    },
    description: { type: DataTypes.TEXT, allowNull: false },
    specifications: { type: DataTypes.JSON, allowNull: true },
    warranty: { type: DataTypes.STRING, allowNull: true },
    manufacturer: { type: DataTypes.STRING, allowNull: true },
  });
