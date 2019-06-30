import React from 'react';
import withStyle from './withStyle';

const HomeRecommendation = ({ className }) => (
  <div className={`${className}`}>
    <div>
      <h2>Vos données en toute sécurité</h2>
      <div className="recommendation_text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet commodi consectetur
        culpa excepturi facilis fugit ipsam laudantium
        magnam, maxime molestias nisi obcaecati officia pariatur quas quos ratione saepe totam veritatis.
      </div>
    </div>
  </div>
);

export default withStyle(HomeRecommendation);
