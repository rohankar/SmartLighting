var net = require('net');
var fs = require('fs');

var HOST = '0.0.0.0';
PORT = 6969;

net.createServer(function(sock) {
    sock.on('data', function(data) {
        //console.log('Client:'+ data);
        fs.appendFile("/home/varunited/Desktop/Socket/test/log.txt", data, function(err) {
            if (err) {
                return console.log(err);
            }

            //console.log("The file was saved!");
        });
    });

    process.stdin.on('readable', function() {
        var chunk = process.stdin.read();
        if (chunk !== null) {
            sock.write(chunk);
        }
    });

    sock.on('close', function(data) {
        console.log('Client Disconnected');
    });
}).listen(PORT, HOST);

console.log('Server listening on ' + HOST + ':' + PORT);