import { ROUTE } from '../actions/types';
import { openModal } from '../actions/uiActions';
//--------------------------------------------------------------------------------------
//                  Manages  routes
//---------------------------------------------------------------------------------------
const routeMiddleware = ({ dispatch }) => next => async (action) => {
  if (action.type !== ROUTE) {
    return next(action);
  }
  dispatch(openModal('none'));
  setTimeout(() => {
    action.payload();
  }, 1000);
};

export default routeMiddleware;
