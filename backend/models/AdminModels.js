import { Sequelize } from "sequelize";
import dbAdmin from "../config/AdminDatabase.js";

const { DataTypes } = Sequelize;

const Admin = dbAdmin.define('admin',{
    name:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    },
    image:{
        type: DataTypes.STRING
    },
    url:{
        type: DataTypes.STRING
    },
    gender:{
        type: DataTypes.STRING
    },
    refresh_token:{
        type: DataTypes.STRING
    }
},{
    freezeTableName:true
});

export default Admin;