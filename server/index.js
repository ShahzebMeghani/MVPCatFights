const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database-mysql/index.js');
// var items = require('../database-mysql');


var app = express();

//don't think I'll need to use
// app.use(express.static(__dirname + '/../react-client/dist'));

let videoList = [];
const getMoreVideos = () => {

};


app.get('/videos', function (req, res) {
  // items.selectAll(function(err, data) {
  //   if(err) {
  //     res.sendStatus(500);
  //   } else {
  //     res.json(data);
  //   }
  // });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

