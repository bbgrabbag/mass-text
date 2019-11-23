import express from 'express';

import {
    apiRouter,
    handleServerErrors,
    jsonify,
    logger,
    serveStatic,
} from './lib';

export const server = express();

server.use(jsonify, logger, serveStatic);
server.use('/api', apiRouter);
server.use(handleServerErrors);
