import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../actions/uiActions';
import { login } from '../../actions/authActions';
import LoginModal from '../../components/Modals/LoginModal';
import SubscriptionModal from '../../components/Modals/SubscriptionModal';
import Footer from '../../components/Footer/Footer';
import VerticalMenuWrapper from '../../components/Menu/VerticalMenuWrapper';

const AdminLayout = ({ modalName, openModal, login, children }) => (
  <div style={{ position: 'relative' }}>
    <VerticalMenuWrapper />
    <div style={{ maxWidth: '1120px', margin: '10px auto' }}>
      {
        children
      }
    </div>
    <LoginModal modalName={modalName} openModal={openModal} login={login}/>
    <SubscriptionModal modalName={modalName} openModal={openModal}/>
    <Footer/>
  </div>
);

const mapStateToProps = (state) => ({
  modalName: state.ui.modalContent,
});

export default connect(mapStateToProps,{ openModal, login })(AdminLayout)
