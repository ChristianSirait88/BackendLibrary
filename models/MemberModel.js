import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;
const TableName = "members";

const Member = db.define(TableName, {
    name: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    gender: DataTypes.STRING
}, {
    freezeTableName: true,
});


export default Member;

(async()=> {
    await db.sync();
})();