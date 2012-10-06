/**
 * Get current timestamp
 * src: http://stackoverflow.com/questions/221294/how-do-you-get-a-timestamp-in-javascript#comment3237875_221297
 */
function time() {
  return parseInt(+(new Date())/1000);
}

var start = time(); // time() mimic PHP's time()
console.log('start: ' + start + "\n");

var request = require('request');
var url = 'http://startupbali.tumblr.com/';
request({uri: url}, function(err, response, body){
  var end = time();
  console.log(url + "\nrequest end:" +  end);
  console.log('after request; ' + (end - start) + " seconds\n\n");
  //console.log(arguments);
});


// https://github.com/felixge/node-mysql/tree/v0.9
var mysql = require('mysql');

var client = mysql.createClient({
  user: 'root',
  password: ''
});

client.useDatabase('node');

var sql = 'select SQL_NO_CACHE count(*) from count_test where b > 0 and b < 999';

client.query(sql, function(err, results, fields){
  var end = time();
  console.log(sql + "\nquery end:" +  end);
  console.log('after query; ' + (end - start) + " seconds\n\n");
  //console.log(results);
  
  client.end(function(){
    console.log('db disconnected');
  })
});