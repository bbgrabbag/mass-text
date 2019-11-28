import * as express from 'express';
import { validateToken } from '../middleware';
import { authRouter } from './auth';
import { contactRouter } from './contact';
import { userRouter } from './user';

export const apiRouter = express.Router();

apiRouter.use('/auth', authRouter);
apiRouter.use(validateToken);
apiRouter.use('/user', userRouter);
apiRouter.use('/contacts', contactRouter);
