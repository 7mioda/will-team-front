import { AUTH, LOGOUT } from '../actions/types';

// Defining initial State²
const initialState = {
  isAuthenticated: false,
  as: 'ANONYMOUS',
  user: {},
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH: {
      return {
        ...state,
        isAuthenticated: true,
        as: action.payload.role,
        user: action.payload.user
      };
    }
    case LOGOUT: {
      return {
        ...state,
        isAuthenticated: false,
        as: 'ANONYMOUS',
        user: {}
      };
    }
    default:
      return state;
  }
};

export default authReducer;
