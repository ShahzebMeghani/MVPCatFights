const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database-mysql/index.js');
// var items = require('../database-mysql');


const app = express();
const jsonParser = bodyParser.json();

app.use(express.static(__dirname + '/../react-client/dist'));


// const getMoreVideos = () => {
//   db.getOneVideo((err, data) => {
//     if(err){
//       console.log('Got err', err);
//     }
//     console.log('data', data);
//
//   })
// };


const init = () => {
  for(let i = 0; i < 5; i++) {
    console.log('videoList.length', videoList.length);
    addOneVideoToVideoList();
  }
};

const votingSession = () => {
  removeLoserVideo();
  addVideoToVideoList();

};

const removeLoserVideo = () => {
  //remove loser
  console.log('vote video 0', videoList[0].votes);
  console.log('vote video 1', videoList[1].votes);
  if(videoList[0].votes > videoList[1].votes) {
    lastWinner = videoList.splice(1, 1);
  } else {
    lastWinner = videoList.splice(0,1);
  }
  //reset vote count
  videoList[0].votes = 0;
  videoList[1].votes = 0;
  console.log('videoList after removed', videoList);
};

const addOneVideoToVideoList = () => {
  db.getOneVideo((err, data) => {
    if(err){
      console.log('Got err', err);
    } else {
      // console.log('data', data);
      // console.log('videoList before insert', videoList);
      console.log('videoList.length', videoList.length);
      if(!videoList.includes(data[0])) {
        console.log('detect if data matches whats in the video list ', data);
        videoList.push({'id': data[0].id, 'votes': 0});
        console.log(videoList);
      }
    }
  });
};

//TODO remove duplicates in VideoList
const addVideoToVideoList = () => {
  //don't need to update full array if only removing one
//PROBLEM WITH USING WHILE LOOP AND THE OTHER FOR LOOP (WON'T UPDATE THE VIDEOLIST ARRAY)
// while(videoList.length < 5) {
// for(let i = videoList.length; i < 5; i = videoList.length){
//   for(let i = 0; i < 5; i++) {

    console.log('videoList.length', videoList.length);
    addOneVideoToVideoList();
  // }

};

let videoList = [];
let timer = 5 * 60 * 1000; //minutes seconds milliseconds = 5 minutes
let lastWinner;
init();


let addVideoTimer = setInterval(votingSession, timer);




//will retrieve current list of videos
// TODO and give remaining time left to vote
app.get('/videos', function (req, res) {
  let videoInformation = {
    video1: videoList[0],
    video2: videoList[1],
    lastWinner: lastWinner
  };
  res.send(videoInformation);
});

// let testVideoList = [{id: 'WP4Uh66FA3A', votes: 0}];

//when user votes will update the vote for the video on the VideoList array
app.post('/vote', jsonParser, function(req, res) {
  console.log('videoList[0][id] ', videoList[0]['id']);
  console.log('req.body.id', req.body.id);
  if(req.body.id === videoList[0]['id']){
    videoList[0]['votes']++;
  } else {
    videoList[1]['votes']++;
  }
  console.log('CURRENT VOTES: ', videoList);
  res.json({video1: videoList[0], video2: videoList[1]});
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

