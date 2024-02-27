// handlers imports
import { sendResponse } from '../handlers/responseHandler';
import {
    createError,
    HTTP_ERROR_CODES,
    HTTP_ERROR_MESSAGES,
} from '../handlers/errorHandler';

import { getTestFunc } from '../Functions/Test';

const getTestCtl = async (req, res) => {
    const { testPassword } = req.query;

    if (!testPassword) {
        const error = createError(
            HTTP_ERROR_CODES.invalidArgument,
            HTTP_ERROR_MESSAGES.missingParms,
        );
        sendResponse(false, null, error, res);
        return;
    }

    try {
        const test = await getTestFunc();
        sendResponse(true, test, null, res);
    } catch (error) {
        sendResponse(false, null, error, res);
    }
};

export { getTestCtl };
