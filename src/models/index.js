// "use strict";
// require("dotenv").config(); // Load biến môi trường từ .env

// const fs = require("fs");
// const path = require("path");
// const { Sequelize } = require("sequelize");

// const basename = path.basename(__filename);
// const env = process.env.NODE_ENV || "development";
// const config = require(__dirname + "/../config/config.json")[env];
// // const config = require(configPath)[env];

// const db = {};

// // Khởi tạo kết nối Sequelize
// let sequelize;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   sequelize = new Sequelize(config.database, config.username, config.password, config);
// }

// // Đọc tất cả các model trong thư mục models
// fs.readdirSync(__dirname)
//   .filter((file) => {
//     return file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js";
//   })
//   .forEach((file) => {
//     const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
//     db[model.name] = model;
//   });

// // Thiết lập quan hệ giữa các model (nếu có)
// Object.keys(db).forEach((modelName) => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// // Xuất đối tượng Sequelize và models
// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// module.exports = db;

"use strict";
require("dotenv").config();
const fs = require("fs");
const path = require("path");
const { Sequelize } = require("sequelize");

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];

const db = {};

// Khởi tạo Sequelize
let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// Đọc tất cả các model trong thư mục models và truyền sequelize
fs.readdirSync(__dirname)
  .filter((file) => file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js")
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize); // Truyền sequelize vào model
    db[model.name] = model;
  });

// Thiết lập quan hệ giữa các model (nếu có)
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
