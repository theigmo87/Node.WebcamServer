var io = require('socket.io').listen(8082, {log:false});
io.sockets.on('connection', function (socket) 
{
    //console.log(socket);
    console.log('websocket connection');
    /*
    socket.on('VIDEO_STREAM_DATA', function (req) 
    {
        console.log(req);
        //socket.emit('VS', data);
    });
    */
});


/*
var webmReceiver = require('socket.io').listen(8082, {log:true});
io.sockets.on('connection', function(socket){
   console.log(socket); 
});
console.log("Listening on localhost:8082");
*/

var STREAM_SECRET = "stream",
    STREAM_PORT = 8084;

var streamServer = require('http').createServer( function(request, response) {
    console.log(request);
    request.on('data', function(data){
        io.sockets.emit('VS', data);
        //io.sockets.emit('VS', data);
    });
   
    /*
	var params = request.url.substr(1).split('/');
	if( params[0] == STREAM_SECRET ) {
		console.log(
			'Stream Connected: ' + request.socket.remoteAddress +
			':' + request.socket.remotePort + ' size: ' + width + 'x' + height
		);
		request.on('data', function(data){
            console.log(data);
			//socketServer.broadcast(data, {binary:true});
		});
	}
	else {
		console.log(
			'Failed Stream Connection: '+ request.socket.remoteAddress +
			request.socket.remotePort + ' - wrong secret.'
		);
		response.end();
	}
    */
}).listen(STREAM_PORT);

console.log("Listening on http://localhost:" + STREAM_PORT);