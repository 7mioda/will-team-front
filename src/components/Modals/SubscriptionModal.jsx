import React, { useState } from 'react';
import { range } from 'ramda';

import withStyleSubscription from './withStyleSubscription';
import PopUp from '../PopUp/PopUp';
import { Formik } from 'formik';

const SubscriptionModal = ({ className, modalName, openModal, subscribe }) => {
  const [passwordState, changePasswordState] = useState(true);
  const [image, setImage] = useState({});
  return (
    <PopUp visible={modalName === 'email-subscription'} close={() => openModal('none')}>
    <div className={`${className}`}>
        <span className="close-icon" onClick={() => openModal('none')} />
        <p className="header-text">
            Inscrivez-vous avec
          <span className="link">Google</span>
        </p>
        <span className="separator">ou</span>
        <Formik
          initialValues={{ firstName: '', lastName: '', password: '', photo: '', email: '', cin: '' }}
          onSubmit={(values) => {subscribe({ ...values, photo: image }) }}
        >
          {(props) => {
            const {
              values,
              handleChange,
              handleSubmit,
            } = props;
            return (
             <>
               <div className="text-box">
                 <input type="text" placeholder="Adresse e-mail" onChange={handleChange} name="email" value={values.email} className="text-input" />
                 <span className="icon-box email" />
               </div>
               <div className="text-box">
                 <input type="text" placeholder="Prénom" name="firstName" onChange={handleChange} value={values.firstName} className="text-input" />
                 <span className="icon-box user" />
               </div>
               <div className="text-box">
                 <input type="text" placeholder="Nom de famille" name="lastName" onChange={handleChange} value={values.lastName} className="text-input" />
                 <span className="icon-box user" />
               </div>
               <div className="text-box">
                 <input type="text" placeholder="Numéro Carte d'identité" onChange={handleChange} name="cin" value={values.cin} className="text-input" />
                 <span className="icon-box user" />
               </div>
               <div className="text-box">
                 <input type="file" placeholder="photo" className="text-input" value={image.filename}
                        onChange={({ target: { files } }) => setImage(files[0])} />
                 <span className="icon-box user" />
               </div>
               <div className="text-box">
                 <input type={`${passwordState ? 'password' : 'text'}`} placeholder="Créer un mot de passe" name="password" onChange={handleChange} className="text-input" />
                 <span className="icon-box password" onClick={(event) => { event.stopPropagation(); changePasswordState(!passwordState) } } />
               </div>
               <div className="birth-date-box">
                 <div className="birth-date-header">
                   <h1>Date de naissance</h1>
                   <p>Pour vous inscrire, vous devez être âgé d'au moins 18 ans.
                     Les autres utilisateurs ne verront pas votre date de naissance.
                   </p>
                 </div>
                 <div className="text-box">
                   <select placeholder="Mois" className="text-input">
                     { range(1, 13).map((index) => <option value="">{index}</option>) }
                   </select>
                   <span className="icon-box down-arrow" />
                 </div>
                 <div className="text-box">
                   <select placeholder="Jour" className="text-input">
                     { range(1, 31).map((index) => <option value="">{index}</option>) }
                   </select>
                   <span className="icon-box down-arrow" />
                 </div>
                 <div className="text-box">
                   <select placeholder="Année" className="text-input">
                     { range(1899, 2020).map((index) => <option value="">{index}</option>) }
                   </select>
                   <span className="icon-box down-arrow" />
                 </div>
                 <div className="birth-date-footer">
                   <p>Nous vous enverrons des promotions commerciales,
                     des offres spéciales, des idées de voyage et des informations réglementaires par e-mail.
                   </p>
                 </div>
               </div>
               <button className="btn pink" type="button" onClick={handleSubmit}> Inscription </button>
            </>)
            }}
        </Formik>
        <div className="promotion">
          <input type="checkbox" />
          <p>
            Je ne souhaite pas recevoir de messages promotionnels du TeamWill. Je peux également
                désactiver cette option à tout moment dans les
            paramètres de mon compte ou via le lien contenu dans ce message.
          </p>
        </div>
        <div className="subscription">
            Vous avez déjà un compte TeamWillBank ?
          <span onClick={(event) => { event.stopPropagation(); openModal('login'); }}>Connexion</span>
        </div>
    </div>
    </PopUp>
  );
};

export default withStyleSubscription(SubscriptionModal);
