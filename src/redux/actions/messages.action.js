import { READ_MESSAGES_START } from '../constants/actionTypes';

const readAllMessagesAction = (payload) => ({
    type: READ_MESSAGES_START,
    payload
});

export { readAllMessagesAction };
