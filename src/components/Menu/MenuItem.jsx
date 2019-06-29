import React, { useContext } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import PropTypes from 'prop-types';
import withStyle from './withStyleItem';
import { MenuContext } from './Menu';

const MenuItem = ({
  className, title, content, ...rest
}) => {
  const context = useContext(MenuContext);
  const { activeItem, setActiveItem } = context;
  const setActiveMenuItem = (event) => {
    event.preventDefault();
    setActiveItem(title === activeItem ? 'none' : title);
  };
  return (
    <div className={className} {...rest}>
      <button
        className="menu-item__title"
        type="button"
        onClick={(event) => setActiveMenuItem(event)}
      >
        {title}
      </button>
      <ReactCSSTransitionGroup
        transitionName="drop"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        {context.activeItem === title && content && (
          <div className="menu-item__dropdown">{content}</div>
        )}
      </ReactCSSTransitionGroup>
    </div>
  );
};

MenuItem.propTypes = {
  className: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.object,
};

MenuItem.defaultProps = {
  content: undefined,
};

export default withStyle(MenuItem);
