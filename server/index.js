import http from 'http';
import socket from 'socket.io';

const server = http.createServer();
const io = socket(server);

io.on('connection', (client) => {
  client.on('event', (data) => { /* … */ });
  client.on('disconnect', () => { /* … */ });
});

server.listen(3000);
