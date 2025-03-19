import express from "express"
import { HandleHelloword, HandleUserPage, HandleCreateNewUser, HandleDeleteUser, getUpdateUser, HandleUpdateUser } from "../controller/homeController";

const router = express.Router();


const initWebRoutes = (app) =>{
    router.get("/", HandleHelloword);
    router.get("/user", HandleUserPage);
    router.post("/users/create-user", HandleCreateNewUser);
    router.post("/delete-user/:id", HandleDeleteUser)
    router.get("/update-user/:id", getUpdateUser)
    router.post("/users/update-user", HandleUpdateUser)
    return app.use("/", router);
}

export default initWebRoutes;