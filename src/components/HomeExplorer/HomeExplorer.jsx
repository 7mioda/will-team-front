import React from 'react';
import withStyle from './withStyle';

const HomeExplorer = ({ className }) => (
  <div className={`${className}`}>
    <div>
      <h2>Explorer Airbnb</h2>
    </div>
    <div className="explorer__item">
      <img className="item__photo" alt="" src="https://a0.muscache.com/4ea/air/v2/pictures/8b7519ec-2c82-4c09-8233-fd4d2715bbf9.jpg" />
      <span className="item__title">Logements</span>
    </div>
    <div className="explorer__item">
      <img className="item__photo" alt="" src="https://a0.muscache.com/4ea/air/v2/pictures/cb8b3101-d419-4c17-8e2f-4989b39b98c3.jpg" />
      <span className="item__title">Expériences</span>
    </div>
    <div className="explorer__item">
      <img className="item__photo" alt="" src="https://a0.muscache.com/4ea/air/v2/pictures/da2d8e97-90b7-409f-94ac-5ab0327c289b.jpg" />
      <span className="item__title">Restaurants</span>
    </div>
  </div>
);

export default withStyle(HomeExplorer);
