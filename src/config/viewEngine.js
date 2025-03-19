import express from "express"

/**
 * 
 * @param {*} app  - express app
 */

const configViewEngine = (app) =>
{
    app.use(express.static('./src/public'));
    app.set("view engine", "ejs");                  ///Thu vien EJS
    app.set("views", "src/views");                   
}

export default configViewEngine;