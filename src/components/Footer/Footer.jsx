import React from 'react';
import * as PropTypes from 'prop-types';
import withStyle from './withStyle';

const Footer = ({ className }) => (
  <footer className={`${className}`}>
    <div className="footer-column">
      <h4>Airbnb</h4>
      <div className="link">Carrières</div>
      <div className="link">Presse</div>
      <div className="link">Règles</div>
      <div className="link">Aide</div>
      <div className="link">Diversité et intégration</div>
      <div className="link">Coordonnées de l'entreprise</div>
    </div>
    <div className="footer-column">
      <h4>Découvrir</h4>
      <div className="link">Confiance et sécurité</div>
      <div className="link">Crédit voyage</div>
      <div className="link">Airbnb Citizen</div>
      <div className="link">Voyage d'affaires</div>
      <div className="link">Guides</div>
      <div className="link">Airbnbmag</div>
      <div className="link">Événements</div>
    </div>
    <div className="footer-column">
      <h4>Hébergement</h4>
      <div className="link">Pourquoi être hôte</div>
      <div className="link">Hospitalité</div>
      <div className="link">Hébergement responsable</div>
      <div className="link">Community Center</div>
      <div className="link">Organisez une expérienceNouveau</div>
      <div className="link">Open Homes</div>
    </div>
    <div className="footer-column">
      <div className="social-icons">
        <span className="icon fb-icon" />
        <span className="icon twitter-icon" />
        <span className="icon insta-icon" />
      </div>
      <div className="link">Conditions</div>
      <div className="link">Politique de confidentialité</div>
      <div className="link">Plan du site</div>
    </div>
    <div className="clear-fix" />
    <div className="footer-copyright">
      <div className="copyright-text">© Airbnb, Inc.</div>
    </div>
  </footer>
);

Footer.propTypes = {
  className: PropTypes.string.isRequired,
};

export default withStyle(Footer);
