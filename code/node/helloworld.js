var request = require('request');

var param = {
	uri:'https://raw.github.com/killedbymemory/subali-node-talks/master/README.md'
};

function callback(){
	debugger;
	console.log(arguments[2]);
}

request(param, callback);
