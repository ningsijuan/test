var express  = require('express');  
var http = require('http');
var app = express();        

app.set('port', process.env.PORT || 8000);
app.use(express.static(__dirname + '/app')); 

var server = http.createServer(app);

server.listen(app.get('port'), function() {
  console.log('Express HTTP server listening on port ' + app.get('port')  ) ;
});