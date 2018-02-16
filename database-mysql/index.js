var mysql = require('mysql');
var config = reuquire('../config.js');

var connection = mysql.createConnection({
  host     : 'localhost:3306',
  user     : 'root',
  password : config.DBPASSWORD,
  database : 'catfight'
});

var selectAll = function(callback) {
  connection.query('SELECT * FROM items', function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports.selectAll = selectAll;
