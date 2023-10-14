'use strict';

import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import path from 'node:path';
import indexRoute from './routes/index.js';
import usersRoute from './routes/users.js';
import testRoute from './routes/test.js';

const app = express();
const dirname = path.resolve('.');

app.disable('x-powered-by');
app.set('views', './src/views');
app.set('view engine', 'pug');

app.use(express.static(path.join(dirname, 'public')));
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(logger('dev'));

app.use('/', indexRoute);
app.use('/api', usersRoute);
app.use('/', testRoute);

app.use((req, res) => {
  res.status(404).render('error');
});

export default app;
