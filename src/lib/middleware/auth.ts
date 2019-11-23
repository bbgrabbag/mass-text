import expressJwt from 'express-jwt';
import { config } from '../../config';

export const validateToken = expressJwt({ secret: config.apiSecret });
