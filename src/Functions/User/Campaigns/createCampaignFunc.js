const createCampaignFunc = async (
    userUID,
    accountId,
    campaignId,
    objective,
    budget,
) => {
    return { success: true, userUID, accountId, campaignId, objective, budget };
};

export { createCampaignFunc };
