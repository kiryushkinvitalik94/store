"use strict";

import fs from "fs";
import path from "path";
import { Sequelize } from "sequelize";
import process from "process";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";

const configJSON = JSON.parse(
  fs.readFileSync(new URL("../config/config.json", import.meta.url)),
);

const config = configJSON[env];
const db = {};

console.log(config);

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config,
  );
}

async function loadModels() {
  const modelFiles = fs
    .readdirSync(__dirname)
    .filter(
      (file) =>
        file.indexOf(".") !== 0 &&
        file !== basename &&
        file.slice(-3) === ".js" &&
        !file.endsWith(".test.js"),
    );

  for (const file of modelFiles) {
    const modelModule = await import(
      new URL(`file://${path.join(__dirname, file)}`)
    );
    const model = modelModule.default(sequelize, Sequelize.DataTypes);

    if (model && model.name) {
      db[model.name] = model;
    } else {
      console.warn(`⚠️  The model in file ${file} was not initialized.`);
    }
  }

  Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });

  db.sequelize = sequelize;
  db.Sequelize = Sequelize;
}

await loadModels();

export default db;
