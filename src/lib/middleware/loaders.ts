import cors from 'cors';
import express from 'express';
import path from 'path';

export const jsonify = express.json();
export const serveStatic = express.static(path.resolve(__dirname, '..', '..', '..', 'public'));
export const logger = (req, res, next) => {
    const endpoint = req.path;
    const method = req.method;
    const ip = req.ip;
    const time = new Date().toLocaleString();
    // tslint:disable-next-line: no-console
    console.log(`
        IP: ${ip}
        METHOD: ${method}
        PATH:${endpoint}
        TIME: ${time}
    `);
    next();
};

export const useCors = () => {
    if (process.env.NODE_ENV === 'development') {
        return cors();
    } else {
        return (req, res, next) => next();
    }
};
