require('dotenv').config();

import { connect, set } from 'mongoose';
import express from 'express';
import cors from 'cors';

import globalRoute from './routers/global';
import funcRoute from './routers/withF';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', globalRoute);
app.use('/api', funcRoute);

set('strictQuery', false);

const start = async () => {
  await connect(process.env.MONGO_URL as string)
    .then(() => {
      console.log('db: ok');
    })
    .catch(() => {
      console.log('db: bad');
    });
  app.listen(process.env.PORT, () => console.log('server started'));
};

start();
