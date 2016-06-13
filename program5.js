var fs = require('fs');
var path = require('path');

var file = process.argv[2];
var ext = process.argv[3];

fs.readdir(file, function(err, list) {
  list.forEach(logArrayElm);
});

function logArrayElm(elm, index, arr) {
  if(path.extname(elm) == '.'+ext) {
    console.log( elm );
  }
}
