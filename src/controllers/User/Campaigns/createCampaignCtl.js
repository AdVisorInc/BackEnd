// handlers imports
import { createCampaignFunc } from '../../../Functions';
import { sendResponse } from '../../../handlers/responseHandler';

const createCampaignCtl = async (req, res) => {
    const { account_id } = req.query;
    const { objective, budget } = req.body;

    try {
        const test = await createCampaignFunc(
            'user1234',
            account_id,
            objective,
            budget,
        );
        sendResponse(true, test, null, res);
    } catch (error) {
        sendResponse(false, null, error, res);
    }
};

export { createCampaignCtl };
