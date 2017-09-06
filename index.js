const http = require('http');
const port = 3000;

const requestHandler = (request, response) => {
	response.end('index.html');
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
	if (err) return console.log('Error!', err);
	console.log(`server is listening on ${port}`);
});
