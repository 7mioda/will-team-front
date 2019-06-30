import React from 'react';
import withStyle from './withStyle';

const Card = ({ children, className }) => (
  <div className={`${className}`}>{children}</div>
);

export default withStyle(Card);
