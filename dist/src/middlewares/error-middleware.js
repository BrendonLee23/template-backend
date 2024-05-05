"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_status_1 = __importDefault(require("http-status"));
function errorHandlingMiddleware(error, req, res, next) {
    if (error.name === 'NotFound') {
        return res.status(http_status_1.default.NOT_FOUND).send('NotFound');
    }
    if (error.name === 'Conflict') {
        return res.status(http_status_1.default.CONFLICT).send('Conflict');
    }
    if (error.name === 'IdNotValidError') {
        return res.status(http_status_1.default.BAD_REQUEST).send(error.message);
    }
    console.log(error);
    return res.status(http_status_1.default.INTERNAL_SERVER_ERROR);
}
exports.default = errorHandlingMiddleware;
