import * as types from './types';


export const setAllCredits = payload => ({
  type: types.ALL_CREDITS,
  payload,
});

export const getAllCredits= () => ({
  type: types.API,
  payload: {
    url: '/loans',
    method: 'get',
    success: ({ loans }) => setAllCredits(loans),
    meta: {
      namespace: 'credits',
      check: true,
    },
  },
});

export const setNewCredit = client => ({
  type: types.ADD_CREDIT,
  payload: client,
});

export const addCredit = data => ({
  type: types.API,
  payload: {
    method: 'post',
    url: 'loans/add',
    data,
    meta: {
      header: 'multipart/form-data',
    },
    success: ({ loan }) => setNewCredit(loan),
  },
});

export const unsetCredit = client => ({
  type: types.REMOVE_CREDIT,
  payload: client,
});

export const removeCredit = credit => ({
  type: types.API,
  payload: {
    method: 'delete',
    url: `/loans/delete/${credit}`,
    success: () => unsetCredit(credit),
  },
});

export const setUpdatedCredit = credit => ({
  type: types.UPDATE_CREDIT,
  payload: credit,
});

export const updateCredit = data => ({
  type: types.API,
  payload: {
    method: 'post',
    url: '/loans/update',
    data,
    meta: {
      header: 'multipart/form-data',
    },
    success: ({ loan }) => setUpdatedCredit(loan),
  },
});
