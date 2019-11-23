import jwt from 'jsonwebtoken';
import fetch from 'node-fetch';
import { config } from '../../config';

export const generateOAuthLink = (): string => {
    const clientID = config.googleClientID;
    const redirectUri = `${config.baseURL}/api/auth/callback`;
    const scope = 'profile email openid';
    const responseType = 'code';

    return `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scope}&response_type=${responseType}&access_type=offline&include_granted_scopes=true`;

};

export const getAccessToken = async (code: string): Promise<any> => {
    const tokenResponse = await fetch(
        `https://www.googleapis.com/oauth2/v4/token`,
        {
            body: JSON.stringify({
                client_id: config.googleClientID,
                client_secret: config.googleClientSecret,
                code,
                grant_type: 'authorization_code',
                redirect_uri: 'http://localhost:8080/api/auth/callback',
            }),
            method: 'POST',
        },
    );
    const token = await tokenResponse.json();
    return token;
};

export const getGoogleUserInfo = async (accessToken: string): Promise<any> => {
    const response = await fetch(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${accessToken}`,
        {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        },
    );
    const info = await response.json();
    return info;
};

export const issueToken = (userID, googleID) => {
    const payload = { userID, googleID };
    return jwt.sign(payload, process.env.API_SECRET);
};
