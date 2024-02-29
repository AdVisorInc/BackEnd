import { Router } from 'express';

import { getOverviewCtl } from '../controllers';

const router = Router();

router.get('/overview', getOverviewCtl);

export default router;
