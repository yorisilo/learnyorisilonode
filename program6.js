var fs = require('fs');
var path = require('path');

var dir = process.argv[2];
var ext = process.argv[3];

var find = function(dir, ext, callback) {
  fs.readdir(dir, function(err, files) {
    files.forEach(function(file) {
      if (path.extname(file) == '.' + ext) {
        console.log( file );
      }
    });
  });
}

find(dir, ext, function() {});
