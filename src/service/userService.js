import bcrypt, { compareSync, hash } from "bcryptjs";
const salt = bcrypt.genSaltSync(10);
// import mysql from 'mysql2';
import mysql from 'mysql2/promise';
import bluebird from 'bluebird';
import db from '../models/index'
import user from "../models/user";
import { where } from "sequelize";

const hashPassword = (userPassword) => {
    let hashPassword = bcrypt.hashSync(userPassword, salt);
    return hashPassword;
}

const creaetNewUser = async (email, username, password) => {
     let hashPass = hashPassword(password);
   try {
    await db.User.create({
        email: email,
        username: username,
        password: hashPass,
    })
   }catch(error){
        console.log("check error: ", error);
   }
}

const getUserlist = async() => {
    try{
        const user = await db.User.findAll({ raw: true });
        return user;
    }catch(error){
        console.log("check error: ", error);
    } 
}

const deleteUser = async (id) => {
    try {
        await db.User.destroy({
           where: {id: id}
        })
       }catch(error){
            console.log("check error: ", error);
       }
}

const getUserById= async (id)=> {
    let user = {};
    user = await db.User.findOne({
        where: {id: id}
    })
    return user.get({ plain: true})
}

const updateUserInfor = async (email, username, id)=>{
    await db.User.update({
        email: email,
        username: username
    },
    {
        where: {id : id}
    }
)
}


module.exports = {
    creaetNewUser, getUserlist, deleteUser, getUserById, updateUserInfor
}