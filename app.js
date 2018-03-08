var express = require('express');
var app = express();

// define the public directory for static assets
var public_dir = __dirname + '/public';

//setup epress
var compression = require('compression');
var bodyParser = require('body-parser');
app.use(compression());
app.use(express.static(public_dir));  // points expressjs to the static directory
app.use(bodyParser.json());  // for POST
app.use(bodyParser.urlencoded());  // for GET

// setup templates
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// route: get: /
app.get('/', function(req, res) {
	res.render('pages/main', { title: "screenshot API"})
});

app.listen(3030);
console.log("port 3030 pretty please...")