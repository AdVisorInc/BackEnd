import { boardObject } from '.';

export const createBoard = async () => {
    const newBoardObject = await boardObject().save({});

    return newBoardObject.toJSON();
};
