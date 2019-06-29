import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Layout from '../Layout';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getAllCreditProposals, updateCreditProposal } from '../../actions/creditProposalActions';
import Button from '../../components/Button/Button';
import { Cell } from '../../components/Table';

const CreditProposalDetails =  ({ getAllCreditProposals, updateCreditProposal, proposal }) => {
  useEffect(()=> {
    getAllCreditProposals();
    return () => undefined;
  }, []);
  const { client, amount, createdAt ,status, loan } = proposal;
  return(
    <Layout>
      <h2>Détails du demande de crédit</h2>
      <p>{amount}</p>
      <p>{createdAt}</p>
      <p>{status}</p>
      <p>{loan.name}</p>
      { !(status === 'approved') && <Button color="#fff" background="#303952" onClick={(event) => { event.stopPropagation(); updateCreditProposal({ ...proposal, status: 'approved', client: client.id, loan: loan.id }); }}>Approuver</Button> }
      { !(status === 'archived') && <Button color="#fff" background="#303952" onClick={(event) => { event.stopPropagation(); updateCreditProposal({ ...proposal, status: 'archived', client: client.id, loan: loan.id }); }}>Archiver</Button> }
      { !(status === 'declined') && <Button color="#fff" background="#e66767" onClick={(event) => { event.stopPropagation(); updateCreditProposal({ ...proposal, status: 'declined', client: client.id, loan: loan.id });}}>Réfuser </Button> }
    </Layout>
  );
};

const mapStateToProps = (state, { match: { params: { proposalId } }}) => ({
  proposal: state.proposals.proposals.find((proposal) => proposal.id === proposalId ),
});

export default compose(withRouter, connect(mapStateToProps, { getAllCreditProposals, updateCreditProposal }))(CreditProposalDetails)
