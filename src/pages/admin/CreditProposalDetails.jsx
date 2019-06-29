import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Layout from '../Layout';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getAllCreditProposals } from '../../actions/creditProposalActions';

const CreditProposalDetails =  ({ getAllCreditProposals, proposal }) => {
  useEffect(()=> {
    getAllCreditProposals();
    return () => undefined;
  }, []);
  console.log(proposal);
  return(
    <Layout>
      <p>clientDetails</p>
    </Layout>
  );
};

const mapStateToProps = (state, { match: { params: { proposalId } }}) => ({
  proposal: state.proposals.proposals.find((proposal) => proposal.id === proposalId ),
});

export default compose(withRouter, connect(mapStateToProps, { getAllCreditProposals }))(CreditProposalDetails)
