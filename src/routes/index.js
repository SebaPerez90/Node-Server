'use strict';

import { Router } from 'express';

const router = Router();

router.use((req, res, next)=>{
  next();
});

router.get('/', (req, res)=>{
  res.render('index', {});
});

export default router;