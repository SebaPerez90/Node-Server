'use strict';

import { Router } from 'express';

const router = Router();

router.use((req, res, next) => {
  next();
});

router.get('/users', (req, res) => {
  res.send('create new user');
});

export default router;
