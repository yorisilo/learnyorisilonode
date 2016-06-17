var http = require('http');

var urls = process.argv.slice(2);

function printResults(results) {
  for(var i = 0; i < results.length; i++) {
    console.log(results[i]);
  }
};

urls.forEach(function(url, i) {
  var results = [];
  http.get(url, function(res) {
    res.setEncoding('utf-8');
    var result = '';
    res.on('data', function(chunk) {
      result += chunk;
    });

    res.on('end', function() {
      results.push(result);

      if(i == results.length) {
        for(var i = 0; i < results.length; i++) {
          console.log(results[i]);
        }
      }
    });
  }).on('error', function(e) {
    console.log(e);
  });
});
