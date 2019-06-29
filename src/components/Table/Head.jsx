import React from 'react';
import withStyle from './withStyleHead';

const Head = ({ className, children, ...rest }) => (
  <th className={`${className}`} {...rest} >
    {children}
  </th>
);

export default withStyle(Head);
