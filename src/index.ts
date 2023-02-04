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
  await connect('mongodb+srv://riot:riot@cluster0.q50nq5f.mongodb.net')
    .then(() => {
      console.log('db: ok');
    })
    .catch(() => {
      console.log('db: bad');
    });
  app.listen(8080, () => console.log('server started'));
};

start();
