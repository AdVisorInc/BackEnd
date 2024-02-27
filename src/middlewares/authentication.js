import { auth } from 'firebase-admin';
import { sendResponse } from '../handlers/responseHandler';
import {
    createError,
    HTTP_ERROR_CODES,
    HTTP_ERROR_MESSAGES,
} from '../handlers/errorHandler';

const extractTokenFrom = string => {
    const bearerTokenString = string.split(' ');
    return bearerTokenString[1];
};

const verifyAccessToken = async (req, res, next) => {
    const rawAccessToken = req.get('Authorization');

    if (!rawAccessToken) {
        sendResponse(
            false,
            null,
            createError(
                HTTP_ERROR_CODES.unauthenticated,
                HTTP_ERROR_MESSAGES.accessTokenUndefined,
            ),
            res,
        );
        return;
    }

    try {
        const accessToken = extractTokenFrom(rawAccessToken);

        const authVerification = await auth().verifyIdToken(accessToken);

        req.body.extractedUID = authVerification.uid;
        next();
    } catch (error) {
        sendResponse(
            false,
            null,
            createError(
                HTTP_ERROR_CODES.unauthenticated,
                HTTP_ERROR_MESSAGES.accessTokenInvalid,
            ),
            res,
        );
    }
};

export { verifyAccessToken };
