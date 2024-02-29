// handlers imports

import { getOverviewFunc } from '../../../Functions';
import { sendResponse } from '../../../handlers/responseHandler';

const getOverviewCtl = async (req, res) => {
    try {
        const test = await getOverviewFunc();
        sendResponse(true, test, null, res);
    } catch (error) {
        sendResponse(false, null, error, res);
    }
};

export { getOverviewCtl };
