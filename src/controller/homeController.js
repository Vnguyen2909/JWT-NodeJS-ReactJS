import userService from  '../service/userService';

const HandleHelloword = (req, res) => {
    const name = "Nguyen Vi"
    return res.render("home.ejs", { name});
}

const HandleUserPage =  async (req, res) => {
    let userList = await userService.getUserlist();
    return res.render("user.ejs", {userList});
}

const HandleCreateNewUser = (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let username = req.body.username;

    // console.log("Check hash password:", hashPassword);

    // let check= bcrypt.compareSync(password, hashPassword);

    // console.log("Check password:", check);

    userService.creaetNewUser(email, username, password);

    return res.redirect("/user");
}

const HandleDeleteUser = async (req, res) => {
    // console.log("check id: ", req.params.id)
    await userService.deleteUser(req.params.id);
    return res.redirect("/user");
}

const getUpdateUser = async (req, res) =>{
    let id = req.params.id;
    let user = await userService.getUserById(id);
    let userData = {};

    if(user && user.length > 0){
        userData = user[0];
    }
    return res.render("user-update.ejs", {userData});
}

const HandleUpdateUser = async (req, res) => {
    let email = req.body.email;
    let username = req.body.username;
    let id = req.body.id;

    await userService.updateUserInfor(email, username, id);
    return res.redirect("/user");
}


module.exports = {
    HandleHelloword, HandleUserPage, HandleCreateNewUser, HandleDeleteUser, getUpdateUser, HandleUpdateUser
}