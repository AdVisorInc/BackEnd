import app from './server';

import { createServer } from 'http';
import { Server } from 'socket.io';
import { cleanupUserFunc, identifyUserFunc, submitRowFunc } from './Functions';

const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3001',
    },
});

const port = process.env.PORT || 5005;

app.listen(port, () => {
    /* eslint-disable no-console */
    console.log(`Listening: http://localhost:${port}`);
});

io.on('connection', socket => {
    console.log('a user connected');

    identifyUserFunc()
        .then(result => {
            console.log(
                'finished identify user func: ' + JSON.stringify(result),
            );
            socket.emit('identification', result);
        })
        .catch(error => {
            socket.emit('printError', JSON.stringify(error));
        });

    socket.on('disconnect', () => {
        console.log('user disconnected');

        cleanupUserFunc()
            .then(result => {
                console.log(
                    'finished cleanup user func: ' + JSON.stringify(result),
                );
            })
            .catch(error => {
                console.log(
                    'There was an error on user cleanup: ' +
                        JSON.stringify(error),
                );
            });
    });

    socket.on('submittedGuess', submittedGuess => {
        console.log('user submitted: ' + submittedGuess);
        submitRowFunc(submittedGuess)
            .then(result => {
                console.log(
                    'handled board update: ' + JSON.stringify(submittedGuess),
                );
                socket.emit('boardUpdate', result);
            })
            .catch(error => {
                console.log('error: ' + error);
                socket.emit('printError', JSON.stringify(error));
            });
    });
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});
