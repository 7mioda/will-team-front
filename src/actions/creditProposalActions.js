import * as types from './types';


export const setAllCreditProposals = payload => ({
  type: types.ALL_CREDITS_PROPOSALS,
  payload,
});

export const getAllCreditProposals = () => ({
  type: types.API,
  payload: {
    url: '/loan-contracts',
    method: 'get',
    success: ({ loanContracts }) => setAllCreditProposals(loanContracts),
  },
});

export const setNewCreditProposal = proposal => ({
  type: types.ADD_CREDIT_PROPOSAL,
  payload: proposal,
});

export const addCreditProposal = data => ({
  type: types.API,
  payload: {
    method: 'post',
    url: 'loan-contracts/add',
    data,
    meta: {
      header: 'multipart/form-data',
    },
    success: ({ loanContract }) => setNewCreditProposal(loanContract),
  },
});

export const unsetCreditProposal = proposal => ({
  type: types.REMOVE_CREDIT_PROPOSAL,
  payload: proposal,
});

export const removeCreditProposal = proposal => ({
  type: types.API,
  payload: {
    method: 'delete',
    url: `/loan-contracts/delete/${proposal}`,
    success: () => unsetCreditProposal(proposal),
  },
});

export const setUpdatedCreditProposal = proposal => ({
  type: types.UPDATE_CREDIT_PROPOSAL,
  payload: proposal,
});

export const updateCreditProposal = data => ({
  type: types.API,
  payload: {
    method: 'post',
    url: '/loan-contracts/update',
    data,
    success: ({ loanContract }) => setUpdatedCreditProposal(loanContract),
  },
});
