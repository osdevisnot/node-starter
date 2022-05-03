import http from 'node:http';

const host = '0.0.0.0';
const port = 1234;

const handler = (request, response) => {
	response.writeHead(200);
	response.end('hello world');
};

const server = http.createServer(handler);
server.listen(port, host, () => {
	console.log(`Server is running on http://${host}:${port}`);
});
