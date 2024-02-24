import messagesServices from "../services/messages-services";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function getAllMessages(req: Request, res: Response){
    const result = await messagesServices.getAllMessages();
    res.send(result).status(httpStatus.OK)
}