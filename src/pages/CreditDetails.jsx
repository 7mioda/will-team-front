import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Layout from './Layout';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getAllCredits } from '../actions/creditActions';
import { openModal } from '../actions/uiActions';

const CreditDetails =  ({ getAllCredits, openModal, credit, isAuthenticated, history }) => {
  useEffect(()=> {
    getAllCredits();
    return () => undefined;
  }, []);
  const { id, banner, name, description, loanPapers } = credit;
  return(
    <Layout>
      <div style={{ maxWidth: '1120px', margin: '10px auto' }}>
        <p>CreditDetails</p>
        <img src={banner} style={{ width: '550px', height: '250px' }} alt="banner"/>
        <h3>{name}</h3>
        <p>{description}</p>
        <p>{loanPapers}</p>
        { !isAuthenticated ?
          <button onClick={() => openModal('login')}> Login pour demander un credit </button>
          : <button onClick={() => history.push(`/team-will-bank/my-space/submit-credit-proposal/${id}`)}> demander un credit </button>}
      </div>
    </Layout>
  );
};

const mapStateToProps = (state, { match: { params: { creditId } }}) => ({
  credit: state.credits.credits.find((credit) => credit.id === creditId ) || {},
  isAuthenticated: state.auth.isAuthenticated
});

export default compose(withRouter, connect(mapStateToProps, { getAllCredits, openModal }))(CreditDetails)
