const express = require('express');

const superagent = require('superagent');
const cheerio = require('cheerio');
const app = express();

app.get('/', (req, res, next) => {
    console.log(req)
    superagent.post('https://www.cnblogs.com/chenqf/p/6386163.html')
        .end((err, sres) => {

            console.log(sres.text)
            if (err) {
                return next(err);
            }
            let $ = cheerio.load(sres.text);
            let items = [];
            $('a',).each((idx, element) => {
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

