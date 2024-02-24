import messagesRepository from "../repositories/messages-repository";

async function getAllMessages(){
    const messages = await messagesRepository.findAllMessages();
    return messages;
}

const messagesServices = {
    getAllMessages,
}

export default messagesServices;