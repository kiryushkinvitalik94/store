"use strict";

export default (sequelize, DataTypes) => {
  const ProductReview = sequelize.define("product_comments", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUID,
    },
    product_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: { model: "products", key: "id" },
      onDelete: "CASCADE",
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: { model: "users", key: "id" },
      onDelete: "CASCADE",
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 5,
      validate: { min: 1, max: 5 },
    },
    parent_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: { model: "product_comments", key: "id" },
      onDelete: "CASCADE",
    },
  });

  return ProductReview;
};
