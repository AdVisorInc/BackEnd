import { Router } from 'express';

import Test from './Test';

const router = Router();

router.use('/test', Test);

export default router;
