import React from 'react';
import Button from '../Button/Button';
import withStyle from './withStyle';

const HomeHost = ({ className }) => (
  <div className={`${className}`}>
    <div className="home-host__banner">
      <h1>
        Gagnez jusqu'à
        483€/mois en hébergeant des voyageurs dans votre logement à Tunis
      </h1>
      <Button color="#484848" background="#fff" classNames={['home-host__btn']}>
          En savoir plus
      </Button>
    </div>
  </div>
);

export default withStyle(HomeHost);
