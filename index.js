let PORT = 5000

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server)
app.use('/public', express.static('public'))
app.set('view engine', 'ejs')

server.listen(PORT)

console.log("Сервер работает!")

app.get('/', function(req, res) {
  res.render("menu")
  console.log(req.headers.host)
})

app.get('/string', function(req, res) {
  res.send(JSON.stringify("string"))
})

io.sockets.on('connection', function(socket) {
	console.log("Успешное соединение")

	socket.on('disconnect', function(data) {
		console.log("Отключились")
	})

	socket.on('send mess', function(data) {
		console.log(data.class)
	})
})
