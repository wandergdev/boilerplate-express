require('dotenv').config();
const bodyParser = require('body-parser');
let express = require('express');
let app = express();


// app.get('/', function(req, res) {
//     res.send("Hello Express")
// });


app.use(function(req, res, next){
    console.log(`${req.method} ${req.path} - ${req.ip}` );
    next();
});

app.use(bodyParser.urlencoded({extended: false}));

app.get('/name', function(req, res){
    const firstName = req.query.first;
    const lastName = req.query.last;
    res.json({name: `${firstName} ${lastName}`});
});

app.get('/:word/echo', function(req, res){
    const { word } = req.params;
    res.json({echo: word})
})

app.get('/now', function(req, res, next){
    req.time = new Date().toString();
    next();
}, function(req, res){
    res.json({time: req.time});
});

app.use('/public', express.static(__dirname + '/public'));

app.get("/", function(req, res){
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/json', function(req, res){
    let helloJson = "Hello json";

    if (process.env.MESSAGE_STYLE === "uppercase") {
        helloJson = helloJson.toUpperCase()
    }

    res.json({message: helloJson})
});




module.exports = app;



































 module.exports = app;
