const HTTP_ERROR_CODES = {
    aborted: 'aborted',
    alreadyExists: 'already-exists',
    cancelled: 'cancelled',
    dataLoss: 'data-loss',
    deadlineExceeded: 'deadline-exceeded',
    failedPrecondition: 'failed-precondition',
    internal: 'internal',
    invalidArgument: 'invalid-argument',
    notFound: 'not-found',
    ok: 'ok',
    outOfRange: 'out-of-range',
    permissionDenied: 'permission-denied',
    resourceExhausted: 'resource-exhausted',
    unauthenticated: 'unauthenticated',
    unavailable: 'unavailable',
    unimplemented: 'unimplemented',
    unknown: 'unknown',
};

const HTTP_ERROR_MESSAGES = {
    accessTokenInteralError:
        'An unknown internal error has occured. Please try again later',
    accessTokenInvalid: 'Access token is invalid.',
    accessTokenUndefined: 'Missing access token.',
    missingParms: '1 or more parms are missing.',
    services: {
        parse: {
            board: {
                internal01: 'An internal error has occured (PARSE.BOARD 01).',
                patch: {
                    invalidRowNumber: givenRowNumber => {
                        return `The index "${givenRowNumber}" for a row is out of bounds (0 <= x <= 5).`;
                    },
                    invalidRowValue: givenRowValue => {
                        return `The value "${givenRowValue}" is not in the proper format for a row (Default = ["", "", "", "", ""]).`;
                    },
                    notFound: givenBoardId => {
                        return `A board with the id "${givenBoardId}" was not found.`;
                    },
                },
            },
            sessions: {
                internal01:
                    'An internal error has occured (PARSE.SESSIONS 01).',
                patch: {
                    missingParms:
                        'updateSession requires a parameter to update, none were provided',
                    missingPK: 'A session for the given id was not found.',
                },
            },
        },
    },
    unknown: 'Request could not be completed. Please try again.',
    websocket: {
        sessionAlreadyActive:
            'There is already an active session. This error was thrown because there already an active player or the previous game was not properly cleaned up.',
    },
};

function CustomHttpError(errorCode, message) {
    this.message = message;
    this.status = errorCode;
}
CustomHttpError.prototype = new Error();

const createError = (errorCode, message) => {
    return new CustomHttpError(errorCode, message);
};

export { createError, HTTP_ERROR_CODES, HTTP_ERROR_MESSAGES };
