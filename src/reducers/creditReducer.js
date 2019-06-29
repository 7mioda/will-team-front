import * as actions from '../actions/types';

// Defining initial State
const initialState = {
  credits: [],
};

const creditsReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case actions.ALL_CREDITS: {
      return {
        ...state,
        credits: payload,
      };
    }
    case actions.ADD_CREDIT: {
      const { credits } = state;
      return {
        ...state,
        clients: [payload, ...credits],
      };
    }
    case actions.REMOVE_CREDIT: {
      const { credits } = state;
      return {
        ...state,
        credits: credits.filter(element => element.id !== payload),
      };
    }
    case actions.UPDATE_CREDIT: {
      const { credits } = state;
      return {
        ...state,
        credits: credits.map((credit) => {
          if (credit.id === payload.id) {
            return payload;
          }
          return credit;
        }),
      };
    }
    default:
      return state;
  }
};

export default creditsReducer;
