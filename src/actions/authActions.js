import * as actions from './types';
import { openModal } from './uiActions';

export const subscribe = data => ({
  type: actions.API,
  payload: {
    method: 'post',
    url: 'clients/add',
    data,
    meta: {
      header: 'multipart/form-data',
    },
    success: ({ token, refreshToken }) => authorise(token, refreshToken),
    error: error => openModal({ title: 'error', body: error }),
  },
});

export const authorise = (token, refreshToken, user, role ,successAction = null) => ({
  type: actions.AUTH,
  payload: {
    token,
    refreshToken,
    user,
    role,
    successAction,
  },
});

const route = (payload) => ({
  type: actions.ROUTE,
  payload
});

export const login =  ({data, history}) => ({
  type: actions.API,
  payload: {
    method: 'post',
    url: 'users/login',
    data,
    success: ({ token, refreshToken, user , role = 'user' }) =>
      authorise(token, refreshToken, user ,role, route(() => role === 'banker' ? history.push('/team-will-bank/admin/'): history.push('/team-will-bank/my-space')) ),
    error: error => openModal({ title: 'error', body: error }),
  },
});

export const getRefreshToken = ({ refreshToken: data, successAction }) => ({
  type: actions.API,
  payload: {
    method: 'post',
    url: 'users/refresh',
    data: {
      refreshToken: data,
    },
    success: ({ token, refreshToken }) => authorise(token, refreshToken, successAction),
    error: error => openModal({ title: 'error', body: error }),
  },
});

export const logout = () => ({
  type: actions.LOGOUT,
  payload: {},
});
