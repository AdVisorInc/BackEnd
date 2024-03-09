import { boardQuery } from '.';
import {
    createError,
    HTTP_ERROR_CODES,
    HTTP_ERROR_MESSAGES,
} from '../../../handlers/errorHandler';

export const updateBoard = async (
    boardId,
    rowNumber,
    rowValue,
    currentGuess,
) => {
    const boardObject = await boardQuery().get(boardId);

    if (!boardObject) {
        throw createError(
            HTTP_ERROR_CODES.notFound,
            HTTP_ERROR_MESSAGES.services.parse.board.patch.notFound(boardId),
        );
    } else if (rowNumber < 0 || rowNumber > 5) {
        throw createError(
            HTTP_ERROR_CODES.invalidArgument,
            HTTP_ERROR_MESSAGES.services.parse.board.patch.invalidRowNumber(
                rowNumber,
            ),
        );
    } else if (rowValue.length != 5 || rowValue.join('').length > 5) {
        throw createError(
            HTTP_ERROR_CODES.invalidArgument,
            HTTP_ERROR_MESSAGES.services.parse.board.patch.invalidRowValue(
                rowValue,
            ),
        );
    }

    const rowKey = 'row' + rowNumber;

    boardObject.set(rowKey, rowValue);
    boardObject.set('currentGuess', currentGuess);

    return await boardObject.save();
};
