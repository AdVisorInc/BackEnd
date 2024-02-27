import { Router } from 'express';

import { getTestCtl } from '../controllers';

const router = Router();

router.get('/getTest', getTestCtl);

export default router;
