'use strict';

import process from 'process';
import mongoose from 'mongoose';
import { config } from 'dotenv';

config();

const conectDataBase = () => {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('conected to data base'))
    .catch((error) => {
      console.log(error);
    });
};

export default conectDataBase;