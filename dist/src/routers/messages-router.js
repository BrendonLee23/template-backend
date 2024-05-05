"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var messages_controller_1 = require("../controllers/messages-controller");
var messageRouter = (0, express_1.Router)();
messageRouter.get('/', messages_controller_1.getAllMessages);
exports.default = messageRouter;
