import * as types from './types';


export const setAllBankers = payload => ({
  type: types.ALL_BANKERS,
  payload,
});

export const getAllBankers = () => ({
  type: types.API,
  payload: {
    url: '/bankers',
    method: 'get',
    success: ({ bankers }) => setAllBankers(bankers),
    meta: {
      namespace: 'bankers',
      check: true,
    },
  },
});

export const setNewBanker = banker => ({
  type: types.ADD_BANKER,
  payload: banker,
});

export const addBanker = data => ({
  type: types.API,
  payload: {
    method: 'post',
    url: 'bankers/add',
    data,
    meta: {
      header: 'multipart/form-data',
    },
    success: ({ banker }) => setNewBanker(banker),
  },
});

export const unsetBanker = banker => ({
  type: types.REMOVE_BANKER,
  payload: banker,
});

export const removeBanker = banker => ({
  type: types.API,
  payload: {
    method: 'delete',
    url: `/bankers/delete/${banker}`,
    success: () => unsetBanker(banker),
  },
});

export const setUpdatedBanker = banker => ({
  type: types.UPDATE_BANKER,
  payload: banker,
});

export const updateCredit = data => ({
  type: types.API,
  payload: {
    method: 'post',
    url: '/bankers/update',
    data,
    meta: {
      header: 'multipart/form-data',
    },
    success: ({ banker }) => setUpdatedBanker(banker),
  },
});
