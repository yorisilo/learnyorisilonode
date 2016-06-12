var fs = require('fs');

var lines = function(file) {
  fs.readFile(file, function(err, data) {
    var lines = data.toString().split('\n').length - 1;
    console.log( lines );
  });
};

var file = process.argv[2];

lines(file);
