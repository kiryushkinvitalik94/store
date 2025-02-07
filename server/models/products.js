"use strict";

export default (sequelize, DataTypes) =>
  sequelize.define("products", {
    id: { type: DataTypes.UUID, primaryKey: true, default: DataTypes.UUID },
    title: { type: DataTypes.CHAR(100), allowNull: false },
    count: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: 0,
    },
    description: { type: DataTypes.TEXT, allowNull: false, defaultValue: null },
    main_image_id: {
      type: DataTypes.UUID,
      references: { model: "products_images", key: "id" },
      onDelete: "CASCADE",
    },
  });
