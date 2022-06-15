import Admin from "../models/AdminModels.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getAdmin = async(req, res) => {
    try {
        const admin = await Admin.findAll({
            attributes:['id','name','email']
        });
        res.json(admin);
    } catch (error) {
        console.log(error);
    }
}

export const LoginAdmin = async(req, res) => {
    try {
        const admin = await Admin.findAll({
            where:{
                email: req.body.email
            }
        });
        const match = await bcrypt.compare(req.body.password, admin[0].password);
        if(!match) return res.status(400).json({msg: "Wrong Password"});
        const userId = admin[0].id;
        const name = admin[0].name;
        const email = admin[0].email;
        const accessToken = jwt.sign({userId, name, email}, process.env.ACCESS_TOKEN_SECRET,{
            expiresIn: '20s'
        });
        const refreshToken = jwt.sign({userId, name, email}, process.env.REFRESH_TOKEN_SECRET,{
            expiresIn: '1d'
        });
        await Admin.update({refresh_token: refreshToken},{
            where:{
                id: userId
            }
        });
        res.cookie('refreshToken', refreshToken,{
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        });
        res.json({ accessToken });
    } catch (error) {
        res.status(404).json({msg:"Email tidak ditemukan"});
    }
}

export const LogoutAdmin = async(req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if(!refreshToken) return res.sendStatus(204);
    const admin = await Admin.findAll({
        where:{
            refresh_token: refreshToken
        }
    });
    if(!admin[0]) return res.sendStatus(204);
    const userId = admin[0].id;
    await Admin.update({refresh_token: null},{
        where:{
            id: userId
        }
    });
    res.clearCookie('refreshToken');
    return res.sendStatus(200);
}