import express from 'express';
import path from 'path';

export const htmlRouter = express.Router();

htmlRouter.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', '..', '..', 'public'));
});
