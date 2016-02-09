var express = require('express'),
    path = require('path');

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public'),{
    redirect: "false"
}));
app.use(express.static(path.join(__dirname, 'db')));
app.use(function (err, request, response, next) {
    console.error(err.stack);
    response.send(500, 'Something broke!');
});

app.get('/*', function (req, res) {
    res.render('index');
});

app.listen(3333, function () {
    console.log("App running on port 3333 (http://localhost:3333)");
});