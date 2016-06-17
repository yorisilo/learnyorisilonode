var http = require('http');

var urls = process.argv.slice(2);

var printResults = function(results) {
  for(var i = 0; i < urls.length; i++) {
    console.log(results[i]);
  }
};

var results = [];
urls.forEach(function(url, i) {
  http.get(url, function(res) {
    res.setEncoding('utf-8');
    var result = '';
    res.on('data', function(chunk) {
      result += chunk;
    });

    res.on('end', function() {
      console.log(result);
    });
  });
});

// なぜだ．．．
// forEach で 前から一個ずつ get していってるのに，endのところで printされるのは順番がおかしなことになる．
