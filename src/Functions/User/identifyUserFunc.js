import { getSession, TEST_SESSION_IDS, updateSession } from '../../Services';
import { createBoard } from '../../Services/Parse/Board';
import {
    createError,
    HTTP_ERROR_CODES,
    HTTP_ERROR_MESSAGES,
} from '../../handlers/errorHandler';

const TEST_USER_SESSION_ID = TEST_SESSION_IDS.PLAYER1;

export const identifyUserFunc = async () => {
    const currentSessionObj = await getSession(TEST_USER_SESSION_ID);

    // Sanity check
    if (!currentSessionObj || currentSessionObj.is_active == null) {
        throw createError(
            HTTP_ERROR_CODES.internal,
            HTTP_ERROR_MESSAGES.services.parse.sessions.internal01,
        );
    }

    // Either active player or session not cleaned up
    if (currentSessionObj.is_active) {
        throw createError(
            HTTP_ERROR_CODES.internal,
            HTTP_ERROR_MESSAGES.websocket.sessionAlreadyActive,
        );
    }

    const newBoard = await createBoard();

    // Sanity check
    if (!newBoard || !newBoard.objectId) {
        throw createError(
            HTTP_ERROR_CODES.internal,
            HTTP_ERROR_MESSAGES.services.parse.board.internal01,
        );
    }

    const { objectId: boardId } = newBoard;

    await updateSession(TEST_USER_SESSION_ID, true, boardId);

    return newBoard;
};
