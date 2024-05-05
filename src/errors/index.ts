import httpStatus from 'http-status';

export function NotFound() {
    return {
        name: 'NOT FOUND',
        code: httpStatus.NOT_FOUND,
        message: 'Message not found.',
    };
}
