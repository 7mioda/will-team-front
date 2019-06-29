import React from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import withStyle from './withStyle';

const Input = (props) => {
  const {
    className, classNames, Prefix, Suffix, ...rest
  } = props;
  const buildClassName = (x) => ['rounded', 'highlighted']
    .map((currentValue) => {
      if (
        get(x, currentValue, undefined) !== undefined
        && currentValue !== false
      ) {
        return currentValue;
      }
      return null;
    })
    .concat(classNames)
    .join(' ');
  return (
    <div className={className}>
      {Prefix && (
        <div className="prefix">
          <Prefix.type {...Suffix.props} />
        </div>
      )}
      <input type="text" {...rest} className={`${buildClassName(props)}`} />
      {Suffix && (
        <div className="suffix">
          <Suffix.type {...Suffix.props} />
        </div>
      )}
    </div>
  );
};

Input.propTypes = {
  className: PropTypes.string.isRequired,
  Prefix: PropTypes.element,
  Suffix: PropTypes.element,
  classNames: PropTypes.array,
};

Input.defaultProps = {
  Prefix: undefined,
  Suffix: undefined,
  classNames: [],
};

export default withStyle(Input);
