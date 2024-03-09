import { getSession, TEST_SESSION_IDS } from '../../Services';
import { getBoard } from '../../Services/Parse/Board/GET';
import { updateBoard } from '../../Services/Parse/Board/PATCH';
import {
    createError,
    HTTP_ERROR_CODES,
    HTTP_ERROR_MESSAGES,
} from '../../handlers/errorHandler';

const TEST_USER_SESSION_ID = TEST_SESSION_IDS.PLAYER1;

export const submitRowFunc = async submittedGuess => {
    const currentSessionObj = await getSession(TEST_USER_SESSION_ID);

    // Sanity check
    if (
        !currentSessionObj ||
        currentSessionObj.is_active != true ||
        !currentSessionObj.board_id
    ) {
        throw createError(
            HTTP_ERROR_CODES.internal,
            HTTP_ERROR_MESSAGES.services.parse.sessions.internal01,
        );
    }

    const { board_id: currentBoardId } = currentSessionObj;

    const boardObject = await getBoard(currentBoardId);

    // Sanity check
    if (!boardObject) {
        throw createError(
            HTTP_ERROR_CODES.internal,
            HTTP_ERROR_MESSAGES.services.parse.board.internal01,
        );
    }

    const { currentGuess } = boardObject;
    const submittedGuessSplit = submittedGuess.split('');

    return await updateBoard(
        currentBoardId,
        currentGuess,
        submittedGuessSplit,
        currentGuess + 1,
    );
};
