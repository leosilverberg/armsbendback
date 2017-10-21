var txt2pho = require("english-text-to-phonemes");
console.log(txt2pho.stringifyPhonemes(txt2pho.toPhonemes("it feels like I know her")));

// import express
var express = require('express');
// import path
var path = require('path');

//express instace
var app = express();



//express setup
app.use(express.static(path.join(__dirname,'public')));



//create server
var server = require('http').createServer(app).listen(process.env.PORT || 8080);
console.log("running server on 8080");
//socketio server
// var io = require('socket.io').listen(server);

// io.sockets.on('connection', function (socket){
// 	console.log('[SOCKET]client connected');
	
// })