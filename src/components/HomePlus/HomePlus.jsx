import React from 'react';
import Button from '../Button/Button';
import withStyle from './withStyle';

const HomePlus = ({ className }) => (
  <div className={`${className}`}>
    <h2>Voici Airbnb Plus</h2>
    <h3>Une sélection de logements vérifiés selon des critères de qualité et de design</h3>
    <div className="airbnb-plus__banner">
      <Button color="#484848" background="#fff" classNames={['airbnb-plus__btn']}>
          Découvrir les logements
      </Button>
    </div>
  </div>
);

export default withStyle(HomePlus);
