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

const insertIntoVideoTable = function(callback) {

};

module.exports.selectAll = selectAll;
