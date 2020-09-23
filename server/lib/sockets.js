import socket from 'socket.io';

class Sockets {
  constructor(server) {
    this.io = socket(server);
    this.connections = [];
  }

  connect() {
    this.io.on('connection', (client) => {
      console.info(
        'Connected: %s socket. Total: %s',
        client.id,
      );

      client.on('subscribe', (payload) => {
        console.info({ payload }, 'Client subscribed to ...');
        client.emit('subscribed');
      });

      client.on('disconnect', () => {
        // TODO - cleanup
        this.connections.splice(this.connections.indexOf(client), 1);
        client.disconnect();
        console.info('Disconnected: %s sockets remaining.', this.connections.length);
      });
    });
  }

  broadcast(payload) {
    this.io.sockets.emit('broadcast', payload);
  }

  notifyUsers(userIds, event, payload) {
    if (!this.io) {
      return;
    }
    userIds.forEach((id) => {
      this.io.to(userRoomPrefix(id)).emit(event, payload);
    });
  }

  listen(event, handler) {
    if (!this.io) {
      throw new Error('sockets server is not ready yet');
    }
    this.io.on(event, handler);
  }
}

export default Sockets;
