var http = require('http');

var server = http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("<h1>Oi</h1>");
    res.end();
});

server.listen(3000, function(){
    console.log('EXECUTANDO SERVIDOR HTTP');
    
});