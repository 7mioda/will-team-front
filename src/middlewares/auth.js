import cookie from 'react-cookies';
import { AUTH, LOGOUT } from '../actions/types';
//--------------------------------------------------------------------------------------
//                  Manages the authentication status
//---------------------------------------------------------------------------------------
const authMiddleware = ({ dispatch }) => next => async (action) => {
  if (action.type !== AUTH) {
    return next(action);
  }
  if (action.type === LOGOUT) {
    cookie.remove('token', { path: '/' });
    cookie.remove('refreshToken', { path: '/' });
  }
  if (action.payload && action.payload.token) {
    const { token, refreshToken } = action.payload;
    cookie.save('token', token, { path: '/', maxAge: 86400 }); // set the token cookie to 24 hours
    cookie.save('refreshToken', refreshToken, { path: '/', maxAge: 86400 }); // set the token cookie to 24 hours
    if (action.payload.successAction) {
      dispatch(action.payload.successAction);
    }
    return next(action);
  }
  const token = cookie.load('token');
  if (token !== undefined) {
    return next(action);
  }
  return next(action);
};

export default authMiddleware;
