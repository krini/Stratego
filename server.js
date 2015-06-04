var express = require('express');
var app = express();


app.get('/', function (req, res) {
    res.sendFile('index.html', { root: __dirname });
});

app.get('*', function (req, res) {
    res.redirect('/');
});

var port = 3000;

var server = app.listen(port,function(){
    console.log("server running on port " + port);
});