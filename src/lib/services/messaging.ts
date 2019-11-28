import twilio from 'twilio';
import { config } from '../../config';

const twilioClient = twilio(config.twilioAccountSID, config.twilioAuthToken);

export const sendMessage = async (msgConfig: IMessageConfig) => {

    const message = await twilioClient.messages.create(msgConfig)
        .catch((err) => { throw new Error(err); });
    return message;
};

