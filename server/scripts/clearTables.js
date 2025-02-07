import db from "../models/index.js";

(async () => {
  try {
    await db.sequelize.authenticate();
    console.log("✅ Database connection has been established successfully.");

    const queryInterface = db.sequelize.getQueryInterface();
    await queryInterface.dropAllTables();

    console.log("✅ All tables have been dropped successfully.");
    process.exit(0);
  } catch (err) {
    console.error("❌ Error during table deletion:", err);
    process.exit(1);
  }
})();
