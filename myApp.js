require('dotenv').config()
let express = require('express');
let app = express();


// app.get('/', function(req, res) {
//     res.send("Hello Express")
// });

app.use('/public', express.static(__dirname + '/public'));

app.get("/", function(req, res){
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/json', function(req, res){
    process.env.MESSAGE_STYLE;
    let helloJson = "Hello Json"
    if (process.env.MESSAGE_STYLE == "uppercase") {
        helloJson = helloJson.toUpperCase()
    }

    res.json({message: helloJson})
});




module.exports = app;



































 module.exports = app;
