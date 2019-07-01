import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getLoanSettlement } from '../services/loanSettlement';
import { Table, Head, Cell, Row } from '../components/Table';
import Layout from './Layout';
import { getAllCredits } from '../actions/creditActions';
import { openModal } from '../actions/uiActions';
import Button from '../components/Button/Button';
import Input from '../components/Input/Input';

const withStyle = (component) => styled(component)`
  max-width: 1120px;
  min-height: 1024px;
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
  const [amount, setAmount] = useState('');
  const [duration, setDuration] = useState('');
  const [settlement, setSettlement] = useState([]);
  const [error, setError] = useState(false);
  const { id, banner, name, interestRate } = credit;
  const simulateLoan = () => {
    if(!isNaN(parseFloat(amount)) && !isNaN(parseFloat(amount))){
      setSettlement(getLoanSettlement(amount, duration, interestRate));
    } else {
      setError(true);
    }
  };

  const settlementView = settlement.map(({
                                           settlementWithoutInterest,
                                           settlementInterest,
                                           settlement,
                                           settlementDate
                                         }) => (
    <Row>
      <Cell>{settlementWithoutInterest}</Cell>
      <Cell>{settlementInterest}</Cell>
      <Cell>{settlement}</Cell>
      <Cell>{settlementDate}</Cell>
    </Row>
  ));

  return(
    <Layout>
      <div className={`${className}`}>
        <img src={banner} style={{ width: '100%', height: '350px', objectFit: 'cover'  }} alt="banner"/>
        <div className="credit-details__body">
          <h2>{name}</h2>
          { !isAuthenticated ?
            <Button color="#fff" background="#303952" onClick={() => openModal('login')}> Login pour demander un credit </Button>
            : <Button color="#fff" background="#303952" onClick={() => history.push(`/team-will-bank/my-space/submit-credit-proposal/${id}`)}> demander un credit </Button>}
          <div style={{ width: '50%' }}>
            <div className="search-input">
            <Input
              type="text"
              style={{ margin: '10px 0' }}
              highlighted
              classNames={['text-field']}
              autoCapitalize
              placeholder="Montant"
              name="amount"
              value={amount}
              id="search-input"
              onChange={({ target: { value } }) => setAmount(value) }
            />
          </div>
          <div className="search-input">
            <Input
              type="text"
              highlighted
              classNames={['text-field']}
              autoCapitalize
              placeholder="Période en mois"
              name="duration"
              value={duration}
              id="search-input"
              onChange={({ target: { value } }) => setDuration(value) }
            />
          </div>
            <Button style={{ marginTop: '10px' }} color="#fff" background="#303952" onClick={simulateLoan}> simuler le credit </Button>
          </div>
          { settlement.length > 0 && <Table style={{ background: '#fff' }}>
            <Row>
              <Head>settlementWithoutInterest</Head>
              <Head>settlementInterest</Head>
              <Head>settlement</Head>
              <Head>settlementDate</Head>
            </Row>
            {settlementView}
          </Table>}
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
