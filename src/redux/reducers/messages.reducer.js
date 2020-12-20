import {
  READ_MESSAGES_SUCCESS
} from '../constants/actionTypes';

const initialState = {
  docs: null,
  limit: 10,
  page: 1,
  pages: 1,
  total: 0
};

function messagesReducer(state = initialState, { type, payload }) {
  switch (type) {
    case READ_MESSAGES_SUCCESS:
      return {
        ...state,
        docs: payload.docs,
        limit: payload.limit,
        page: payload.page,
        pages: payload.pages,
        total: payload.total
      };
    // TODO handle on error
    default:
      return state;
  }
}

export default messagesReducer;
