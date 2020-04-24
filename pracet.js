const express = require('express');
// 调用 express 实例，它是一个函数，不带参数调用时，会返回一个 express 实例，将这个变量赋予 app 变量。
const superagent = require('superagent');
const cheerio = require('cheerio');
const app = express();

app.get('/', (req, res, next) => {
    console.log(req)
    superagent.get('https://blog.csdn.net/summer199605/article/details/98652959')
        .end((err, sres) => {
            return sres;
        res.send(sres)
}}
app.listen(3000, function () {
    console.log('app is listening at port 3000');
});