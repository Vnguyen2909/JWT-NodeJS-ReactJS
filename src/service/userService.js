import bcrypt, { compareSync, hash } from "bcryptjs";
const salt = bcrypt.genSaltSync(10);
// import mysql from 'mysql2';
import mysql from 'mysql2/promise';
import bluebird from 'bluebird';


// const Connection = mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'mysql',
//     database:'jwt'
// })

const hashPassword = (userPassword) => {
    let hashPassword = bcrypt.hashSync(userPassword, salt);
    return hashPassword;
}

const creaetNewUser = async (email, username, password) => {
    const Connection = await mysql.createConnection({ host:'localhost',
        user:'root',
        password:'mysql',
        database:'jwt',
        Promise: bluebird
    })

    let hashPass = hashPassword(password);
    try{
        const [rows, fields] = await Connection.execute('INSERT INTO users(email, username, password) VALUES(?, ?, ?)', [email, username, hashPass])
    }catch(error){
        console.log("check error: ", error);
    }
   
}

const getUserlist = async() => {
    const Connection = await mysql.createConnection({ host:'localhost',
        user:'root',
        password:'mysql',
        database:'jwt',
        Promise: bluebird
    })
    let users = [];

    try{
        const [rows, fields] = await Connection.execute('SELECT * from users')
        return rows;
    }catch(error){
        console.log("check error: ", error);
    }

   
}

const deleteUser = async (id) => {
    const Connection = await mysql.createConnection({ host:'localhost',
        user:'root',
        password:'mysql',
        database:'jwt',
        Promise: bluebird
    })

    try{
        const [rows, fields] = await Connection.execute('DELETE FROM users WHERE id=?', [id]);
    }catch(error){
        console.log("check error: ", error);
    }
}

const getUserById= async (id)=> {
    const Connection = await mysql.createConnection({ host:'localhost',
        user:'root',
        password:'mysql',
        database:'jwt',
        Promise: bluebird
    })

    try{
        const [rows, fields] = await Connection.execute('SELECT * FROM users WHERE id=?', [id]);
        return rows;
    }catch(error){
        console.log("check error: ", error);
    }
}

const updateUserInfor = async (email, username, id)=>{
    const Connection = await mysql.createConnection({ host:'localhost',
        user:'root',
        password:'mysql',
        database:'jwt',
        Promise: bluebird
    })
    try{
        const [rows, fields] = await Connection.execute('UPDATE users SET email=?, username=? WHERE id=?', [email, username, id]);
        return rows;
    }catch(error){
        console.log("check error: ", error);
    }
}


module.exports = {
    creaetNewUser, getUserlist, deleteUser, getUserById, updateUserInfor
}