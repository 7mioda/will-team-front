import React from 'react';
import withStyle from './withStyle';

const Card = ({ className, credit: { banner, name, description }, ...rest }) => (
  <div className={`${className}`} { ...rest }>
    <div className="card__slider">
      <img src={banner} style={{ width: '100%', height: '100%', borderRadius: '5px' }} alt="" />
    </div>
    <div className="card__body">
      <h3>
        {name}
      </h3>
      <p>
        {description}
      </p>
    </div>
  </div>
);

export default withStyle(Card);
