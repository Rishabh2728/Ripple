import http from 'node:http';
import { Server } from 'socket.io';
import { createApp } from './app.js';
import { connectDatabase } from './config/database.js';
import { env } from './config/env.js';

async function bootstrap() {
  await connectDatabase();

  const app = createApp();
  const server = http.createServer(app);
  const io = new Server(server, {
    cors: {
      origin: env.CLIENT_ORIGIN,
      credentials: true
    }
  });

  io.on('connection', (socket) => {
    socket.emit('presence:connected', { socketId: socket.id });
  });

  server.listen(env.PORT, () => {
    console.info(`Ripple API listening on port ${env.PORT}`);
  });
}

bootstrap().catch((error) => {
  console.error('Failed to start Ripple API', error);
  process.exit(1);
});
