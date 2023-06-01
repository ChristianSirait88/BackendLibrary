import { Sequelize } from "sequelize";
import config from "../config.json"assert { type: "json" };

const HOST = config.HOST;
const DB_NAME = config.DB_NAME;
const USERNAME = config.USERNAME;
const PASSWORD = config.PASSWORD;

const db = new Sequelize(DB_NAME, USERNAME, PASSWORD, {
    host: HOST,
    dialect: 'mysql'
});

export default db;