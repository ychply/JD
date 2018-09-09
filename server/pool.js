//#创建连接池
//1:加载 mysql模块
const mysql = require("mysql");
//2:创建连接池对象
var pool = mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"123",
    database:"myigou",
    port:3306,
    connectionLimit:5
})
//3:公开连接池对象
module.exports = pool;