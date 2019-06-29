import * as actions from '../actions/types';

// Defining initial State
const initialState = {
  proposals: [],
};

const creditProposalsReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case actions.ALL_CREDITS_PROPOSALS: {
      return {
        ...state,
        proposals: payload,
      };
    }
    case actions.ADD_CREDIT_PROPOSAL: {
      const { proposals } = state;
      return {
        ...state,
        proposals: [payload, ...proposals],
      };
    }
    case actions.REMOVE_CREDIT_PROPOSAL: {
      const { proposals } = state;
      return {
        ...state,
        proposals: proposals.filter(element => element.id !== payload),
      };
    }
    case actions.UPDATE_CREDIT: {
      const { proposals } = state;
      return {
        ...state,
        proposals: proposals.map((proposal) => {
          if (proposal.id === payload.id) {
            return payload;
          }
          return proposal;
        }),
      };
    }
    default:
      return state;
  }
};

export default creditProposalsReducer;
