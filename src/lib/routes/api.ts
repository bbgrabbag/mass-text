import express from 'express';
import { validateToken } from '../middleware';
import { authRouter } from './auth';

export const apiRouter = express.Router();

apiRouter.use('/auth', authRouter);
apiRouter.use(validateToken);
apiRouter.get('/test', (req, res) => {
    res.send('authorized');
});
