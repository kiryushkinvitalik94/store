"use strict";

export default (sequelize, DataTypes) =>
  sequelize.define("products_images", {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUID,
    },
    product_id: {
      type: DataTypes.UUID,
      references: { model: "products", key: "id" },
      onDelete: "CASCADE",
    },
    image_url: { type: DataTypes.STRING(100) },
    alt_text: { type: DataTypes.STRING(100) },
  });
