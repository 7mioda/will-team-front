import React from 'react';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import withStyle from './withStyle';

const Button = (props) => {
  const {
    className, children, classNames, ...rest
  } = props;
  const buildClassName = (x) => ['outline', 'animated', 'rounded', 'regular']
    .map((currentValue) => {
      if (get(x, currentValue, undefined) === true) {
        return currentValue;
      }
      return null;
    })
    .concat(classNames)
    .join(' ');
  return (
    <div className={className}>
      <button
        type="button"
        {...rest}
        className={`btn ${buildClassName(props)}`}
      >
        {children}
      </button>
    </div>
  );
};

Button.propTypes = {
  className: PropTypes.string.isRequired,
  classNames: PropTypes.array,
};

Button.defaultProps = {
  classNames: [],
};

export default withStyle(Button);
