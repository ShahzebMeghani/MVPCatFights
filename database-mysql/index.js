const mysql = require('mysql');
const config = require('../config.js');

const connection = mysql.createConnection({
  host     : 'localhost:3306',
  user     : 'root',
  password : config.DBPASSWORD,
  database : 'catfight'
});

const selectAll = function(callback) {
  connection.query('SELECT * FROM items', function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

const getOneVideo = (callback) => {
  connection.query('SELECT id FROM videos WHERE RAND()<=0.0006 limit 1', (err, results) => {
    if(err){
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
}

//update maxvote count after winner is decided
const updateMaxVotes = (id, voteCount, callback) => {
  connection.query(`INSERT INTO videos SET max_votes = ${voteCount} WHERE id=${id} and max_vote > ${voteCount}`, (err, results) => {
    if(err){
      callback(err, null);
    } else {
      callback(null, results);
    }
  });

};



//add once everything else is done to have users upload more videos to DB
const insertIntoVideoTable = function(callback) {

};



module.exports.selectAll = selectAll;
