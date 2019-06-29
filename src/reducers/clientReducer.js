import * as actions from '../actions/types';

// Defining initial State
const initialState = {
  clients: [],
};

const clientsReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case actions.ALL_CLIENTS: {
      return {
        ...state,
        clients: payload,
      };
    }
    case actions.ADD_CLIENT: {
      const { clients } = state;
      return {
        ...state,
        clients: [payload, ...clients],
      };
    }
    case actions.REMOVE_CLIENT: {
      const { clients } = state;
      return {
        ...state,
        clients: clients.filter(element => element.id !== payload),
      };
    }
    case actions.UPDATE_CLIENT: {
      const { clients } = state;
      return {
        ...state,
        clients: clients.map((client) => {
          if (client.id === payload.id) {
            return payload;
          }
          return client;
        }),
      };
    }
    default:
      return state;
  }
};

export default clientsReducer;
