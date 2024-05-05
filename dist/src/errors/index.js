"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFound = void 0;
var http_status_1 = __importDefault(require("http-status"));
function NotFound() {
    return {
        name: 'NOT FOUND',
        code: http_status_1.default.NOT_FOUND,
        message: 'Message not found.',
    };
}
exports.NotFound = NotFound;
