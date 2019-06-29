import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import withStyle from './withStyle';

const PopUp = ({
  className, children, title, visible, close,
}) => {
  let ref = null;
  useEffect(() => {
    window.addEventListener('click', ({ target }) => { if (target === ref) { close(); } });
    return () => window.removeEventListener('click', ({ target }) => { if (target === ref) { close(); } });
  }, [close, ref]);
  return visible && (
    <div
      className={`${className}`}
      role="dialog"
      aria-hidden={visible}
      aria-labelledby="modal__title"
      ref={(el) => {
        if (!el) return;
        ref = el;
      }}
    >
      <button type="button" className="modal__close-icon" onClick={close} />
      <div
        className="modal"
      >
        {title && <h1 id="modal__title">{title}</h1>}
        {children}
      </div>
    </div>
  );
};

PopUp.propTypes = {
  className: PropTypes.string.isRequired,
  title: PropTypes.string,
  visible: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
};

export default withStyle(PopUp);
