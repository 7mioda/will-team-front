import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../actions/uiActions';
import { login, subscribe } from '../actions/authActions';
import LoginModal from '../components/Modals/LoginModal';
import SubscriptionModal from '../components/Modals/SubscriptionModal';
import Footer from '../components/Footer/Footer';
import MenuWrapper from '../components/Menu/MenuWrapper';

const Layout = ({ modalName, openModal, login, subscribe ,children }) => (
  <div style={{ position: 'relative' }}>
    <MenuWrapper  />
    <div>
      {
        children
      }
    </div>
    <Footer/>
    <LoginModal modalName={modalName} openModal={openModal} login={login}/>
    <SubscriptionModal modalName={modalName} subscribe={subscribe} openModal={openModal}/>
  </div>
);

const mapStateToProps = (state) => ({
  modalName: state.ui.modalContent,
});

export default connect(mapStateToProps,{ openModal, login, subscribe })(Layout)
