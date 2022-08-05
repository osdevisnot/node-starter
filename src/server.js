import http from 'node:http';
import { handler } from './handler.js';

const host = '0.0.0.0';
const port = 1234;

const server = http.createServer(handler);

server.listen(port, host, () => {
	console.log(`Server is running on http://${host}:${port}`);
});
