import express from 'express';
import { authRouter } from './auth';

export const apiRouter = express.Router();

apiRouter.use('/auth', authRouter);
