import app from './server';

import { createServer } from 'http';
import { Server } from 'socket.io';

const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:57874',
    },
});

const port = process.env.PORT || 5005;

let currentConnections = 0;

app.listen(port, () => {
    /* eslint-disable no-console */
    console.log(`Listening: http://localhost:${port}`);
});

io.on('connection', socket => {
    console.log('a user connected');

    currentConnections += 1;

    socket.emit('identification', currentConnections);

    if (currentConnections > 1) {
        socket.local.emit('gameState', 'ready');
        socket.emit('gameState', 'ready');
    } else {
        socket.local.emit('gameState', 'lobby');
        socket.emit('gameState', 'lobby');
    }

    socket.on('disconnect', () => {
        currentConnections -= 1;
        console.log('user disconnected');

        if (currentConnections < 2) {
            socket.local.emit('gameState', 'lobby');
            socket.emit('gameState', 'lobby');
        }
    });

    socket.on('submittedGuess', msg => {
        console.log('guess: ' + msg);

        socket.emit('foo', 'good job: ' + currentConnections);
    });
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});
