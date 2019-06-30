import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllCredits } from '../actions/creditActions';
import Layout from './Layout';
import Card from '../components/Card/Card';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

const withStyle = (component) => styled(component)`
  max-width: 1120px;
  height: 800px;
  padding-top: 80px;
  margin: 0 auto;
  background: url("/img/help.png") right bottom / 50% 50% no-repeat;
  color: rgb(72, 72, 72);
  font-family: Roboto, sans-serif;
  h2 {
    margin-bottom: 20px;
  }
`;

const CreditsList =  ({ getAllCredits, credits, history, className }) => {
  useEffect(()=> {
    getAllCredits();
    return () => undefined;
  }, []);
  const creditsView = credits.map((credit) => <Card
    key={credit.id}
    credit={credit}
    onClick={() => history.push(`/team-will-bank/credit-details/${credit.id}`)} />);
  return(
    <Layout>
      <div className={`${className}`}>
      <h2>Nos Crédits</h2>
        {creditsView}
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  credits: state.credits.credits,
});

export default compose(connect(mapStateToProps, { getAllCredits }), withRouter,withStyle)(CreditsList)
