import { boardQuery } from '.';

export const getBoard = async boardId => {
    const boardObject = await boardQuery().get(boardId);

    return boardObject.toJSON();
};
