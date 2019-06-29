import * as actions from '../actions/types';

// Defining initial State
const initialState = {
  bankers: [],
};

const bankersReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case actions.ALL_BANKERS: {
      return {
        ...state,
        bankers: payload,
      };
    }
    case actions.ADD_BANKER: {
      const { bankers } = state;
      return {
        ...state,
        bankers: [payload, ...bankers],
      };
    }
    case actions.REMOVE_BANKER: {
      const { bankers } = state;
      return {
        ...state,
        bankers: bankers.filter(element => element.id !== payload),
      };
    }
    case actions.UPDATE_BANKER: {
      const { bankers } = state;
      return {
        ...state,
        bankers: bankers.map((banker) => {
          if (banker.id === payload.id) {
            return payload;
          }
          return banker;
        }),
      };
    }
    default:
      return state;
  }
};

export default bankersReducer;
