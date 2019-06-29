import React from 'react';
import Carousel from '../Carousel/Carousel';
import withStyle from './withStyle';

const HomeRecommendation = ({ className }) => (
  <div className={`${className}`}>
    <div>
      <h2>Nos recommandations</h2>
    </div>
    <Carousel itemNumber={5}>
      <div className="recommandation__item">
        <img
          className="item__photo"
          alt=""
          src="https://a0.muscache.com/im/pictures/998b4270-25d7-4850-8ccf-4350b9a5ab05.jpg?aki_policy=large"
        />
        <span className="item__title">
          <h3>Paris</h3>
          <p>100€/nuit en moyenne</p>
        </span>
      </div>
      <div className="recommandation__item">
        <img
          className="item__photo"
          alt=""
          src="https://a0.muscache.com/im/pictures/60145c65-7c36-4ac5-8129-6ae9a0d27a81.jpg?aki_policy=large"
        />
        <span className="item__title">
          <h3>Tokyo</h3>
          <p>78€/nuit en moyenne</p>
        </span>
      </div>
      <div className="recommandation__item">
        <img
          className="item__photo"
          alt=""
          src="https://a0.muscache.com/4ea/air/v2/pictures/da2d8e97-90b7-409f-94ac-5ab0327c289b.jpg"
        />
        <span className="item__title">Restaurants</span>
      </div>
      <div className="recommandation__item">
        <img
          className="item__photo"
          alt=""
          src="https://a0.muscache.com/4ea/air/v2/pictures/8b7519ec-2c82-4c09-8233-fd4d2715bbf9.jpg"
        />
        <span className="item__title">Logements</span>
      </div>
      <div className="recommandation__item">
        <img
          className="item__photo"
          alt=""
          src="https://a0.muscache.com/4ea/air/v2/pictures/cb8b3101-d419-4c17-8e2f-4989b39b98c3.jpg"
        />
        <span className="item__title">Expériences</span>
      </div>
      <div className="recommandation__item">
        <img
          className="item__photo"
          alt=""
          src="https://a0.muscache.com/4ea/air/v2/pictures/da2d8e97-90b7-409f-94ac-5ab0327c289b.jpg"
        />
        <span className="item__title">Restaurants</span>
      </div>
      <div className="recommandation__item">
        <img
          className="item__photo"
          alt=""
          src="https://a0.muscache.com/4ea/air/v2/pictures/8b7519ec-2c82-4c09-8233-fd4d2715bbf9.jpg"
        />
        <span className="item__title">Logements</span>
      </div>
      <div className="recommandation__item">
        <img
          className="item__photo"
          alt=""
          src="https://a0.muscache.com/4ea/air/v2/pictures/cb8b3101-d419-4c17-8e2f-4989b39b98c3.jpg"
        />
        <span className="item__title">Expériences</span>
      </div>
      <div className="recommandation__item">
        <img
          className="item__photo"
          alt=""
          src="https://a0.muscache.com/4ea/air/v2/pictures/da2d8e97-90b7-409f-94ac-5ab0327c289b.jpg"
        />
        <span className="item__title">Restaurants</span>
      </div>
      <div className="recommandation__item">
        <img
          className="item__photo"
          alt=""
          src="https://a0.muscache.com/4ea/air/v2/pictures/8b7519ec-2c82-4c09-8233-fd4d2715bbf9.jpg"
        />
        <span className="item__title">Logements</span>
      </div>
      <div className="recommandation__item">
        <img
          className="item__photo"
          alt=""
          src="https://a0.muscache.com/4ea/air/v2/pictures/cb8b3101-d419-4c17-8e2f-4989b39b98c3.jpg"
        />
        <span className="item__title">Expériences</span>
      </div>
      <div className="recommandation__item">
        <img
          className="item__photo"
          alt=""
          src="https://a0.muscache.com/4ea/air/v2/pictures/da2d8e97-90b7-409f-94ac-5ab0327c289b.jpg"
        />
        <span className="item__title">Restaurants</span>
      </div>
      <div className="recommandation__item">
        <img
          className="item__photo"
          alt=""
          src="https://a0.muscache.com/4ea/air/v2/pictures/8b7519ec-2c82-4c09-8233-fd4d2715bbf9.jpg"
        />
        <span className="item__title">Logements</span>
      </div>
      <div className="recommandation__item">
        <img
          className="item__photo"
          alt=""
          src="https://a0.muscache.com/4ea/air/v2/pictures/cb8b3101-d419-4c17-8e2f-4989b39b98c3.jpg"
        />
        <span className="item__title">Expériences</span>
      </div>
      <div className="recommandation__item">
        <img
          className="item__photo"
          alt=""
          src="https://a0.muscache.com/4ea/air/v2/pictures/da2d8e97-90b7-409f-94ac-5ab0327c289b.jpg"
        />
        <span className="item__title">Restaurants</span>
      </div>
      <div className="recommandation__item">
        <img
          className="item__photo"
          alt=""
          src="https://a0.muscache.com/4ea/air/v2/pictures/8b7519ec-2c82-4c09-8233-fd4d2715bbf9.jpg"
        />
        <span className="item__title">Logements</span>
      </div>
      <div className="recommandation__item">
        <img
          className="item__photo"
          alt=""
          src="https://a0.muscache.com/4ea/air/v2/pictures/cb8b3101-d419-4c17-8e2f-4989b39b98c3.jpg"
        />
        <span className="item__title">Expériences</span>
      </div>
      <div className="recommandation__item">
        <img
          className="item__photo"
          alt=""
          src="https://a0.muscache.com/4ea/air/v2/pictures/da2d8e97-90b7-409f-94ac-5ab0327c289b.jpg"
        />
        <span className="item__title">Restaurants</span>
      </div>
    </Carousel>
  </div>
);

export default withStyle(HomeRecommendation);
