import express, { json, Request, Response } from 'express';
import 'express-async-errors';
import httpStatus from 'http-status';
import messageRouter from './routers/messages-router';
import errorHandlingMiddleware from './middlewares/error-middleware';

const app = express();

app.use(json()); // body-parser
// app.use(cors()); //

app.get('/health', (req: Request, res: Response) => {
    return res.status(httpStatus.OK).send("I'm Ok!");
});

app.use('/messages', messageRouter);
app.use(errorHandlingMiddleware);

export default app;
