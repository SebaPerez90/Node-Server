'use strict';

import app from '../src/app.js';
import conectDataBase from '../src/db-config.js';
import process from 'node:process';
import http from 'node:http';
import { EventEmitter } from 'node:events';


const server = http.createServer(app);
const eventEmitter = new EventEmitter();
const PORT = process.env.PORT || 3000;

server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.log(`PORT:${PORT} is already in use. Trying to connect to the next available port...`);
    eventEmitter.emit('portInUse', error);
  } else {
    console.error('An unexpected error occurred:', error);
  }
});

conectDataBase();

const startServer = (PORT) => {
  server.listen(PORT, () => {
    if (PORT !== process.env.PORT) {
      console.log(`Server running on http://localhost:${PORT}`);
    }
  });
};

eventEmitter.on('portInUse', () => {
  startServer(PORT + 1);
});

startServer(PORT);

