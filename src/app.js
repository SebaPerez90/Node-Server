'use strict';

import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import indexRoutes from './routes/index.js';
import usersRoutes from './routes/users.js';
import path from 'node:path';


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

app.use('/', indexRoutes);
app.use('/api', usersRoutes);

app.use((req, res) => {
  res.status(404).render('error');
});


export default app;
