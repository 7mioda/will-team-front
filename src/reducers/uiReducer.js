import * as actions from '../actions/types';

// Defining initial State
const initialState = {
  modalContent: 'none',
  modalStatus: false,
  leftMenu: false,
  isFetching: false,
};

const uiReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case actions.OPEN_MODAL: {
      return {
        ...state,
        modalStatus: true,
        modalContent: payload,
      };
    }
    case actions.CLOSE_MODAL: {
      return {
        ...state,
        modalStatus: false,
      };
    }
    case actions.TOGGLE_DATA_FETCHING: {
      const { isFetching } = state;
      return {
        ...state,
        isFetching: !isFetching,
      };
    }
    case actions.CLOSE_MENU: {
      return {
        ...state,
        leftMenu: false,
      };
    }
    case actions.OPEN_MENU: {
      return {
        ...state,
        leftMenu: true,
      };
    }
    default:
      return state;
  }
};

export default uiReducer;
