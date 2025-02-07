import Fastify from "fastify";
import db from "./models/index.js";

const app = Fastify({ logger: true });

app.get("/", (req, reply) => {
  reply.send({ hello: "world" });
});

// Check database connection
try {
  await db.sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

try {
  await app.listen({ port: 3000 });
} catch {
  app.log("error", err);
  process.exit(1);
}
