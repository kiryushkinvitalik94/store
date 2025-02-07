import db from "../models/index.js";

(async () => {
  try {
    await db.sequelize.authenticate();
    console.log("Database connection has been established successfully.");

    await db.sequelize.sync({ force: true });
    console.log("All tables have been created successfully.");

    process.exit(0);
  } catch (err) {
    console.error("Error during table creation:", err);
    process.exit(1);
  }
})();
