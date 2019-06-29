import React from 'react';
import withStyle from './withStyle';

const Table = ({ className, children, ...rest }) => (
  <table className={`${className}`} {...rest} >
    <tbody>
    {children}
    </tbody>
  </table>
);

export default withStyle(Table);
