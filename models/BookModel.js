import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;
const TableName = "books";

const Book = db.define(TableName, {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    page: DataTypes.STRING
}, {
    freezeTableName: true,
});


export default Book;

(async()=> {
    await db.sync();
})();