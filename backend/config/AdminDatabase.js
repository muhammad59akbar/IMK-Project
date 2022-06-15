import { Sequelize } from "sequelize";

const dbAdmin = new Sequelize('imk_db', 'root', '',{
    host:"localhost",
    dialect: "mysql"
})

export default dbAdmin;