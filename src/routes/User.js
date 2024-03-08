import { Router } from 'express';

import { createCampaignCtl, getOverviewCtl } from '../controllers';
import { getAccountsCtl } from '../controllers/User/Get/getAccountsCtl';

const router = Router();

router.get('/overview', getOverviewCtl);
router.get('/accounts/', getAccountsCtl);

router.post('/accounts/:account_id/campaigns/', createCampaignCtl);

export default router;
