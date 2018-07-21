var http = require('http');

var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');
//var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt')

//myReadStream.pipe(myWriteStream)

var server = http.createServer(function(req,res){
    console.log('Request was made: '+ req.url);
    myReadStream.pipe(res);
    //res.end('Hay ninjas');
});

server.listen(3000, '127.0.0.1');

console.log('Server IS run in port 3000')



//myReadStream.on('data', function(chunk){
//    console.log('new Chunk')
//    myWriteStream.write(chunk)
//});