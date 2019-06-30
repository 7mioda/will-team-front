import React from 'react';
import withStyle from './withStyle';

const HomeExplorer = ({ className }) => (
  <div className={`${className}`}>
    <div>
      <h2>Explorer TWBank</h2>
    </div>
    <div className="explorer__item">
      <img className="item__photo" alt="" src="/img/img_prod_epargne.png" />
      <span className="item__title">Epargne</span>
    </div>
    <div className="explorer__item">
      <img className="item__photo" alt="" src="/img/atb3351img_carriere_block.png" />
      <span className="item__title">Offres</span>
    </div>
    <div className="explorer__item">
      <img className="item__photo" alt="" src="/img/img_prod_carte.png" />
      <span className="item__title">Cart</span>
    </div>
  </div>
);

export default withStyle(HomeExplorer);
