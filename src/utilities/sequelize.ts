import { Sequelize } from "sequelize";
import pg from "pg";
import env from "./env";

let sequelize: Sequelize;

if (env.NODE_ENV === "production") {
  sequelize = new Sequelize(env.CONNECTION_URI, {
    dialect: "postgres",
    dialectModule: pg,
    logging: false,
  });
} else {
  sequelize = new Sequelize({
    dialect: "mysql",
    host: env.DB_HOST,
    username: env.DB_USERNAME,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
  });
}

export default sequelize;
