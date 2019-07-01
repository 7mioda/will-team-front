import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Layout from './Layout';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getAllCredits } from '../actions/creditActions';
import { openModal } from '../actions/uiActions';
import Button from '../components/Button/Button';
import styled from 'styled-components';

const withStyle = (component) => styled(component)`
  max-width: 1120px;
  height: 1024px;
  padding-top: 80px;
  margin: 0 auto;
  background: url("/img/help.png") right bottom / 50% 50% no-repeat;
  color: rgb(72, 72, 72);
  font-family: Roboto, sans-serif;
  .credit-details__body {
    padding: 50px;
  }
  h2, h3 {
    margin-bottom: 20px;
  }
  p {
    margin-bottom: 20px;
  }
  ul {
    margin-left: 10px;
    margin-bottom: 50px;
  }
`;

const CreditDetails =  ({ getAllCredits, openModal, credit, isAuthenticated, history, className }) => {
  useEffect(()=> {
    getAllCredits();
    return () => undefined;
  }, []);
  const { id, banner, name, description, loanPapers } = credit;
  return(
    <Layout>
      <div className={`${className}`}>
        <img src={banner} style={{ width: '100%', height: '350px', objectFit: 'cover' }} alt="banner"/>
        <div className="credit-details__body">
          <h2>{name}</h2>
          <p>{description}</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam at aut corporis deserunt
            ex facilis incidunt ipsum iure, labore, necessitatibus nemo neque nostrum perferendis provident
            quaerat quos ratione sint.</p>
          <h3>Pièces justificatives</h3>
          <ul>
            {
              loanPapers.split('/').map((paper) => <li>{paper}</li>)
            }
          </ul>
          { !isAuthenticated ?
            <Button color="#fff" background="#303952" onClick={() => openModal('login')}> Login pour demander un credit </Button>
            : <Button color="#fff" background="#303952" onClick={() => history.push(`/team-will-bank/my-space/submit-credit-proposal/${id}`)}> demander un credit </Button>}
          <Button style={{ marginTop: '20px' }} color="#fff" background="#303952" onClick={() => history.push(`/team-will-bank/credit-settlement/${id}`)}> simuler le credit </Button>
        </div>
      </div>
    </Layout>
  );
};
const mapStateToProps = (state, { match: { params: { creditId } }}) => ({
  credit: state.credits.credits.find((credit) => credit.id === creditId ) || {},
  isAuthenticated: state.auth.isAuthenticated
});

export default compose(withRouter, connect(mapStateToProps, { getAllCredits, openModal }), withStyle)(CreditDetails)
