import React from 'react';
import Button from '../Button/Button';
import withStyle from './withStyle';

const HomePlus = ({ className }) => (
  <div className={`${className}`}>
    <h2>Voici TWBank Plus</h2>
    <h3>Une sélection de crédits immobiliers vérifiés selon des critères de qualité et qui vous conviennent</h3>
    <div className="airbnb-plus__banner">
      <Button color="#484848" background="#fff" classNames={['airbnb-plus__btn']}>
          Découvrir nos crédits
      </Button>
    </div>
  </div>
);

export default withStyle(HomePlus);
