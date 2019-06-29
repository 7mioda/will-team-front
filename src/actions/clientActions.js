import * as types from './types';


export const setAllClients = payload => ({
  type: types.ALL_CLIENTS,
  payload,
});

export const getAllClients = () => ({
  type: types.API,
  payload: {
    url: '/clients',
    method: 'get',
    success: ({ clients }) => setAllClients(clients),
    meta: {
      namespace: 'clients',
      check: true,
    },
  },
});

export const setNewClient = client => ({
  type: types.ADD_CLIENT,
  payload: client,
});

export const addClient = data => ({
  type: types.API,
  payload: {
    method: 'post',
    url: 'clients/add',
    data,
    meta: {
      header: 'multipart/form-data',
    },
    success: ({ client }) => setNewClient(client),
  },
});

export const unsetClient = client => ({
  type: types.REMOVE_CLIENT,
  payload: client,
});

export const removeClient = client => ({
  type: types.API,
  payload: {
    method: 'delete',
    url: `/clients/delete/${client}`,
    success: () => unsetClient(client),
  },
});

export const setUpdatedClient = client => ({
  type: types.UPDATE_CLIENT,
  payload: client,
});

export const updateClient = data => ({
  type: types.API,
  payload: {
    method: 'post',
    url: '/clients/update',
    data,
    meta: {
      header: 'multipart/form-data',
    },
    success: ({ client }) => setUpdatedClient(client),
  },
});
