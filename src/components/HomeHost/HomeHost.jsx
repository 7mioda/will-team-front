import React from 'react';
import Button from '../Button/Button';
import withStyle from './withStyle';

const HomeHost = ({ className }) => (
  <div className={`${className}`}>
    <div className="home-host__banner">
      <h1>
        Gagnez jusqu'à
        483TND/année avec nos comptes épargne
      </h1>
      <Button color="#fff" background="#e93e8f" classNames={['home-host__btn']}>
          En savoir plus
      </Button>
    </div>
  </div>
);

export default withStyle(HomeHost);
