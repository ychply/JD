//#创建连接池
//1:加载 mysql模块
const mysql = require("mysql");
//2:创建连接池对象
var pool = mysql.createPool({
    host:"localhost",
    user:"root",
        password:"123",
//    password:"",
    database:"myigou",
      port:3316,
//  port:5000,
    connectionLimit:5
})
//3:公开连接池对象
module.exports = pool;