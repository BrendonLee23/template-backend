import { Request, Response } from 'express';
import httpStatus from 'http-status';
import messagesServices from '../services/messages-services';
import { NotFound } from '../errors';

export async function getAllMessages(req: Request, res: Response) {
    const result = await messagesServices.getAllMessages();
    if (result.length === 0) {
        throw NotFound();
    }
    res.send(result).status(httpStatus.OK);
}
