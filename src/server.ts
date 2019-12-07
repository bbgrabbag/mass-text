import express from 'express';

import {
    apiRouter,
    handleServerErrors,
    jsonify,
    logger,
    serveStatic,
    useCors,
} from './lib';

export const server = express();

server.use(useCors(), jsonify, logger, serveStatic);
server.use('/api', apiRouter);
server.use(handleServerErrors);
