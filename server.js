var express = require('express');
var bodyParser = require('body-parser');

app = express();

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Accept, Content-Type');

    next();
};


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.use(allowCrossDomain);

app.get('/', function (req, res) {

    res.sendFile('app.html', { root: __dirname + '/public' } );
});

app.listen(7000,function(){
    console.log("server running on port " + 7000);
});
