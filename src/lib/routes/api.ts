import * as express from 'express';
import { validateToken } from '../middleware';
import { authRouter } from './auth';

export const apiRouter = express.Router();

apiRouter.use('/auth', authRouter);
apiRouter.use(validateToken);
apiRouter.route('/test')
    .get((req, res) => {
        res.status(200).send(`${req.user} authorized`);
    });
