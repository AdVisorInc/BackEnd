// handlers imports

import { getAccountsFunc } from '../../../Functions';
import { sendResponse } from '../../../handlers/responseHandler';

const getAccountsCtl = async (req, res) => {
    try {
        const test = await getAccountsFunc('test1234');
        sendResponse(true, test, null, res);
    } catch (error) {
        sendResponse(false, null, error, res);
    }
};

export { getAccountsCtl };
