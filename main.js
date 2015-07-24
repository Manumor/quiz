var fs = require('fs');
var Questions = require('./quiz')
fs.readFile("./questions.json", 'utf8', Questions);