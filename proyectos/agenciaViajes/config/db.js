import { Sequelize } from "sequelize";
import { configDotenv } from "dotenv";
configDotenv();

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;

const db = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: "mysql",
  define: {
    timestamps: false,
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 3000,
    idle: 10000,
  },
  operatorsAliases: 0,
});

(async () => {
  await db.sync({ force: false });
})();

export default db;
