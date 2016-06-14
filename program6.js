var fs = require('fs');
var path = require('path');

var dir = process.argv[2];
var ext = process.argv[3];

var find = function(dir, ext, callback) {
  fs.readdir(dir, function(err, list) {
    var files = [];
    if (err) return callback(err);

    list.forEach(function(file) {
      if (path.extname(file) == '.' + ext) {
        files.push(file);
      }
    });
    return callback(null, files);
  });
};

// コールバック関数を使うことによりネストした関数内の値を取ってくることができる．
// 限定継続の shift/reset 的に使える．

var files = find(dir, ext, function(err, files) {
  files.forEach(function(file) {
    console.log( file );
  });
});
