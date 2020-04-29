const express = require('express');
// 调用 express 实例，它是一个函数，不带参数调用时，会返回一个 express 实例，将这个变量赋予 app 变量。
const superagent = require('superagent');
const cheerio = require('cheerio');
const app = express();
const port=3000


const { createProxyMiddleware } = require('http-proxy-middleware');  //注意写法，这是1.0以后的版本，最好按抄

module.exports = function (app) {
    app.use(createProxyMiddleware('/',
        {
            target: 'http://10.0.17.100:9700/',
            pathRewrite: {
                '^/': '',
            },
            changeOrigin: true,
            secure: false, // 是否验证证书
            ws: true, // 启用websocket
        }
    ));
};


app.get('/', (req, res, next) => {
    console.log(req)
    superagent.post('https://www.google.com.hk/webhp?hl=zh-CN&sourceid=cnhp&gws_rd=ssl')
        .end((err, sres) => {

            console.log(sres.text)
            if (err) {
                return next(err);
            }
            let $ = cheerio.load(sres.text);
            let items = [];
            $('a').each((idx, element) => {
                let $element = $(element);
                items.push({
                    title: $element.text(),
                    href: $element.attr('href')
                });
            });
            res.send(items);
        });
});

app.listen(port)
console.log("app listern started on port " + port)