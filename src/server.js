import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import bodyParser from "body-parser";

require("dotenv").config();  //Khai bao thu vien env

const app = express();
const PORT = process.env.PORT || 8080;   //Cu phap ho tro san cua JS cho env


//config view engine
configViewEngine(app);

//config body-parser
// support parsing of application/json type post data
app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

//test connection Database
// connection();

//init web routes
initWebRoutes(app);

app.listen(PORT , () => {
    console.log('Running on the port: ', PORT);
})

