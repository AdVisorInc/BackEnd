import { Router } from 'express';

import Test from './Test';
import User from './User';

const router = Router();

router.use('/test', Test);
router.use('/user', User);

export default router;
