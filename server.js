const express = require('express')
const app = express()
const serv = require('http').Server(app);

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/index.html');
});
app.use('/', express.static(__dirname + '/'));

//app.use('/ACcontent', express.static(__dirname + '/'));

serv.listen(3000);
