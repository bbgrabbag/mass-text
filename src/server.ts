import express from 'express';
import { config } from './config';
import {
    apiRouter,
    htmlRouter,
} from './lib';

export const server = express();

server.use(...config.loaders);
server.use('/api', apiRouter);
server.get('*', htmlRouter);
