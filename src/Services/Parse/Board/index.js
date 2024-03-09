import Parse from 'parse/node';
import { initParse } from '..';

export const boardObject = () => {
    initParse();

    const Board = Parse.Object.extend('Board');

    return new Board();
};

export const boardQuery = () => {
    initParse();

    const Board = Parse.Object.extend('Board');

    return new Parse.Query(Board);
};

export * from './GET';
export * from './POST';
