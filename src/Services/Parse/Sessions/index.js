import Parse from 'parse/node';
import { initParse } from '..';

export const TEST_SESSION_IDS = {
    PLAYER1: 'FT9UplyGI9',
    PLAYER2: 'uHBfovlmmQ',
};

export const sessionObject = () => {
    initParse();

    const Sessions = Parse.Object.extend('Sessions');

    return new Sessions();
};

export const sessionQuery = () => {
    initParse();

    const Sessions = Parse.Object.extend('Sessions');

    return new Parse.Query(Sessions);
};

export * from './GET';
export * from './PATCH';
