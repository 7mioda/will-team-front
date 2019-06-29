import React from 'react';
import withStyle from './withStyleCell';

const Cell = ({ className, children, ...rest }) => (
  <td className={`${className}`} {...rest} >
    {children}
  </td>
);

export default withStyle(Cell);
