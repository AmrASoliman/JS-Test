var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
    console.log('Request was made: '+ req.url);

    if (req.url === '/home' || req.url === '/'){
        res.writeHead(200,{'Content-Type': 'Text/html'});
        var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
        myReadStream.pipe(res);
    }else  if (req.url === '/contact'){
        res.writeHead(200,{'Content-Type': 'Text/html'});
        var myReadStream = fs.createReadStream(__dirname + '/contact.html', 'utf8');
        myReadStream.pipe(res);
    }else  if (req.url === '/api/json'){
    var Users= [{name: 'Amr', age: 42},{name: 'Maha', age: 40},{name: "Hamza",age:13} ];
    res.writeHead(200,{'Content-Type': 'Application/Json'});
    res.end(JSON.stringify(Users))
    }else{
        res.writeHead(404,{'Content-Type': 'Text/html'});
        fs.createReadStream(__dirname + '/404.html', 'utf8').pipe(res);
    }

    
    
});

server.listen(3000, '127.0.0.1');

console.log('Server IS run in port 3000')

