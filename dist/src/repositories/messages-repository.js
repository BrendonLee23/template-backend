"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var database_1 = __importDefault(require("../database"));
function findAllMessages() {
    return database_1.default.message.findMany();
}
var messagesRepository = {
    findAllMessages: findAllMessages,
};
exports.default = messagesRepository;
