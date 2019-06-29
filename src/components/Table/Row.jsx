import React from 'react';
import withStyle from './withStyleRow';

const Row = ({ className, children, ...rest }) => (
  <tr className={`${className}`} {...rest} >
    {children}
  </tr>
);

export default withStyle(Row);
