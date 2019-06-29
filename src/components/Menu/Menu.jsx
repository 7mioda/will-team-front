import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import withStyle from './withStyle';
import { get } from 'lodash'

export const MenuContext = createContext({
  activeItem: 'none',
  setActiveItem: () => undefined,
});

const Menu = (props) => {
  const { className, children, classNames } = props;
  const [activeItem, setActiveItem] = useState(null);
  const buildClassName = (x) => ['left', 'right', 'center']
    .map((currentValue) => {
      if (get(x, currentValue, undefined) === true) {
        return currentValue;
      }
      return null;
    })
    .concat(classNames)
    .join(' ');
  return (
    <div className={`${className}`}>
      <div className={`menu ${buildClassName(props)}`}>
        <MenuContext.Provider value={{ activeItem, setActiveItem }}>
          {children}
        </MenuContext.Provider>
      </div>
    </div>
  );
};

Menu.propTypes = {
  className: PropTypes.string.isRequired,
};

export default withStyle(Menu);
