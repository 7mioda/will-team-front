import * as R from 'ramda';
import { API } from '../actions/types';

const apiCallEnhancer = ({ getState }) => next => (action) => {
  if (
    action.type === API
    && R.prop('meta', action.payload)
    && R.prop('check', action.payload.meta) === true
  ) {
    const stateInstance = R.prop(action.payload.meta.namespace, getState());
    const data = R.prop(action.payload.meta.namespace, stateInstance);
    if (data.length > 0) {
      console.log(`ACTION: ${action.type} is Blocked`, action);
      return null;
    }
  }
  return next(action);
};

export default apiCallEnhancer;
