const express = require('express');
// 调用 express 实例，它是一个函数，不带参数调用时，会返回一个 express 实例，将这个变量赋予 app 变量。
const superagent = require('superagent');
const cheerio = require('cheerio');
const app = express();

app.get('/', (req, res, next) => {
    console.log(req)
    superagent.get('https://blog.csdn.net/weixin_44773271/article/details/96836006')
        .end((err, sres) => {

            console.log(sres.text)
            if (err) {
                return next(err);
            }
            let $ = cheerio.load(sres.text);
            let items = [];
            $('p').each((idx, element) => {
                let $element = $(element);
                items.push({
                    title: $element.text(),
                    href: $element.attr('href')
                });
            });
            res.send(items);
        });
});

app.listen(3000, function () {
    console.log('app is listening at port 3000');
});