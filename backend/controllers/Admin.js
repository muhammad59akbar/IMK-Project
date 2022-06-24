import Admin from "../models/AdminModels.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import path from 'path';
import fs from 'fs';

export const getAdmin = async(req, res) => {
    try {
        const admin = await Admin.findAll({
            attributes:['id','name','email', 'gender', 'image' , 'url']
        });
        res.json(admin);
    } catch (error) {
        console.log(error);
    }
}

export const getAdminById = async (req, res) => {
    try {
        const admin = await Admin.findOne({
            where: {
                id: req.params.id
            }
        });
        res.json(admin);
    } catch (error) {
        console.log(error)
        
    }
}


export const CreateAdmin = async(req, res) => {
    if(req.files === null) return res.status(400).json({msg : "No Files Uploaded"});
    const { name, email, password, gender } = req.body;
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const filename = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/images/${filename}`;
    const allowedType = ['.png', '.jpg' , '.jpeg'];

    if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
    if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);

    file.mv(`./public/images/${filename}`, async(err) => {
        if(err) return res.status(500).json({msg : err.message});
        try {
            await Admin.create({
                name: name,
                email: email,
                password: hashPassword,
                gender: gender,
                image: filename,
                url: url,
            });
            res.status(201).json({msg: "Add Category Successfully"})
            
        } catch (error) {
            console.log(error)
            
        }
    })
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

export const updateAdmin = async(req, res) => {
    const update = await Admin.findOne({
        where: {
            id: req.params.id
        }
    });
    if(!update) return res.status(404).json({msg: "No data Found"});

}



export const DeleteAdmin = async (req, res) => {
    const delAdmin = await Admin.findOne({
        where: {
            id: req.params.id
        }
    });
    if(!delAdmin) return res.status(404).json({msg: "No Data Found"});

    try {
        const filepath = `./public/images/${delAdmin.image}`;
        fs.unlinkSync(filepath);
        await Admin.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Deleted is Successfully"});
        
    } catch (error) {
        console.log(error.message);
    }
}