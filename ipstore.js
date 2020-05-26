const mysql = require("mysql");
const express = require("express")
const app = express()
const port = 6666
app.listen(port, () => {
    console.log("服务器开启在" + port)
})
//创建链接
const connection = mysql.createConnection({
    host: "localhost", // 主机名
    port: 3306, // 端口号，默认3306
    user: "root", // 用户名
    password: "root123", // 密码
    database: "world" // 数据库名称
});
connection.connect((err)=>{
    if(err) throw err;
    console.log("连接成功")
});//连接


// app.get('/',(req,res)){}
function request(sql, params) {
    return new Promise((resolve, reject) => {
        connection.query(sql, params, (err, result, fields) => {
            if (!err) {
                resolve(result)
            } else {
                reject(err)
            }
        })
    })
}

module.exports = request;

request('SELECT name FROM city',)

function requttc(ssc, mes) {
    return console.log("nne加kk")
}

