import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllCredits } from '../actions/creditActions';
import Layout from './Layout';
import Card from '../components/Card/Card';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

const CreditsList =  ({ getAllCredits, credits, history }) => {
  useEffect(()=> {
    getAllCredits();
    return () => undefined;
  }, []);
  console.log(credits);
  const creditsView = credits.map((credit) => <Card
    key={credit.id}
    credit={credit}
    onClick={() => history.push(`/team-will-bank/credit-details/${credit.id}`)} />);
  return(
    <Layout>
      <div style={{ maxWidth: '1120px'}}>
      <p>CreditList</p>
        {creditsView}
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  credits: state.credits.credits,
});

export default compose(connect(mapStateToProps, { getAllCredits }), withRouter)(CreditsList)
