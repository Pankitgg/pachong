var express = require('express');
var app = express();
var cookieParser = require('cookie-parser')
var util = require('util')


//get post
app.get('/gg',function(req,res){
    console.log("post 请求")
    console.log(req.ip)
res.send('gg设置成功')
})


app.use('/public', express.static('public'));

app.get('/index.html', function (req, res) {
    res.sendFile( __dirname + "/" + "index.html" );
})




app.get('/process_get', function (req, res) {

    // 输出 JSON 格式
    var response = {
        "first_name":req.query.first_name,
        "last_name":req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
})



app.use(cookieParser())
app.get('/',function(req,res){
    console.log('cookies====   ' + util.inspect(req.cookie))
})

var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port
    console.log("访问地址为 http://%s:%s", host, port)
})
