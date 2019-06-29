import * as types from './types';

export const openModal = payload => ({
  type: types.OPEN_MODAL,
  payload,
});

export const closeModal = () => ({
  type: types.CLOSE_MODAL,
  payload: {},
});

export const openMenu = () => ({
  type: types.OPEN_MENU,
  payload: {},
});

export const closeMenu = () => ({
  type: types.CLOSE_MENU,
  payload: {},
});

export const dataFetching = () => ({
  type: types.TOGGLE_DATA_FETCHING,
  payload: {},
});
