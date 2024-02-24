import prisma from "../database";

function findAllMessages(){
    return prisma.message.findMany();
}

const messagesRepository = {
    findAllMessages
}

export default messagesRepository;