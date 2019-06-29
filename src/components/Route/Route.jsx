import React from 'react';
import * as Proptypes from 'prop-types';
import { Route as DomRoute, Redirect } from 'react-router-dom';

const Route = ({ component: Component, isAuthenticated = true, redirectTo , ...rest }) => (
  <DomRoute
    {...rest}
    render={() => (isAuthenticated ? <Component {...rest} /> : <Redirect to={redirectTo} />)
    }
  />
);

Route.propTypes = {
  component: Proptypes.element.isRequired,
  isAuthenticated: Proptypes.bool,
};

export default Route;
