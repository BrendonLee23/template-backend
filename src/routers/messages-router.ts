import { getAllMessages } from "../controllers/messages-controller";
import {Router} from "express";

const messageRouter = Router();

messageRouter.get("/", getAllMessages)

export default messageRouter;