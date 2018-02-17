const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database-mysql/index.js');
// var items = require('../database-mysql');


var app = express();

//don't think I'll need to use
// app.use(express.static(__dirname + '/../react-client/dist'));


// const getMoreVideos = () => {
//   db.getOneVideo((err, data) => {
//     if(err){
//       console.log('Got err', err);
//     }
//     console.log('data', data);
//
//   })
// };

let videoList = [];
let timer = 5 * 60 * 1000; //minutes seconds milliseconds = 5 minutes
let addVideoTimer = setInterval(addVideoToVideoList, timer);

const votingSession = () => {
  removeLoserVideo();
  addVideoToVideoList();

}

const removeLoserVideo = () => {
  //remove loser
  if(videoList[0].votes > videoList[1].votes) {
    videoList.splice(1, 1);
  } else {
    videoList.splice(0,1)
  }
  //reset vote count
  videoList[0].votes = 0;
  videoList[1].votes = 0;
}


const addVideoToVideoList = () => {
  //don't need to update full array if only removing one
//PROBLEM WITH USING WHILE LOOP AND THE OTHER FOR LOOP (WON'T UPDATE THE VIDEOLIST ARRAY)
// while(videoList.length < 5) {
// for(let i = videoList.length; i < 5; i = videoList.length){
//   for(let i = 0; i < 5; i++) {

    console.log('videoList.length', videoList.length);
    db.getOneVideo((err, data) => {
      if(err){
        console.log('Got err', err);
      } else {
        // console.log('data', data);
        // console.log('videoList before insert', videoList);
        console.log('videoList.length', videoList.length);
        if(!videoList.includes(data)) {
          videoList.push({'id': data, 'votes': 0});
        }
      }
    });
  // }

}



//will retrieve current list of videos and give remaining time left to vote
app.get('/videos', function (req, res) {
  // items.selectAll(function(err, data) {
  //   if(err) {
  //     res.sendStatus(500);
  //   } else {
  //     res.json(data);
  //   }
  // });
});

//when user votes will update the vote for the video on the VideoList array
app.post('/vote', function(req, res) {

});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

