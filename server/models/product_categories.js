"use strict";

export default (sequelize, DataTypes) =>
  sequelize.define("product_categories", {
    product_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: { model: "products", key: "id" },
    },
    categories: {
      type: DataTypes.UUID,
      allowNull: false,
      references: { model: "categories", key: "id" },
    },
  });
