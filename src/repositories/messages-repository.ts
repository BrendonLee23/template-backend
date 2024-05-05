import { Message } from '@prisma/client';
import prisma from '../database';

export type CreateMessageBody = Omit<Message, 'id'>;

function findAllMessages() {
    return prisma.message.findMany();
}

const messagesRepository = {
    findAllMessages,
};

export default messagesRepository;
