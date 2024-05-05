import joi from 'joi';
import { CreateMessageBody } from './../repositories/messages-repository';

export const MessageSchema = joi.object<CreateMessageBody>({
    text: joi.string().required(),
});
