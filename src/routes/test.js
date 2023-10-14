'use strict';

import { Router } from 'express';

const router = Router();

router.use('/', (req, res, next) => {
  next();
});

router.get('/test', (req, res) => {
  res.send('ruta de prueba');
});

export default router;
