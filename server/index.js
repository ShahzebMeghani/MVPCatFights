var express = require('express');
var bodyParser = require('body-parser');

var items = require('../database-mysql');


var app = express();

//don't think I'll need to use
// app.use(express.static(__dirname + '/../react-client/dist'));


app.get('/videos', function (req, res) {
  items.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

