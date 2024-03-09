import { sessionQuery } from '.';
import {
    createError,
    HTTP_ERROR_CODES,
    HTTP_ERROR_MESSAGES,
} from '../../../handlers/errorHandler';

const updateSession = async (sessionId, isActive, boardId) => {
    const sessionQueryObj = sessionQuery();

    const sessionObject = await sessionQueryObj.first(sessionId);

    if (!sessionObject) {
        throw createError(
            HTTP_ERROR_CODES.notFound,
            HTTP_ERROR_MESSAGES.services.parse.sessions.patch.missingPK,
        );
    }

    sessionObject.set('is_active', isActive);
    sessionObject.set('board_id', boardId);

    return await sessionObject.save();
};

export { updateSession };
