import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import AdminLayout from './AdminLayout';
import { getAllCreditProposals, updateCreditProposal } from '../../actions/creditProposalActions';
import { Cell, Head, Row, Table } from '../../components/Table';

const CreditProposalsList =  ({ getAllCreditProposals, updateCreditProposal, proposals, history }) => {
  useEffect(()=> {
    getAllCreditProposals();
    return () => undefined;
  }, []);
  console.log(proposals);
  const proposalsView = proposals.map((proposal) => {
    const { id, client, amount, createdAt ,status, loan } = proposal;
    return(
    <Row key={id} onClick={() => history.push(`/team-will-bank/admin/credit-proposal/${id}`)}>
      <Cell>{id || 'none'}</Cell>
      <Cell>{ status || 'none'}</Cell>
      <Cell>{ amount || 'none'}</Cell>
      <Cell>{ createdAt || 'none'}</Cell>
      <Cell>{ client && client.firstName || 'none'}</Cell>
      <Cell>{ client && client.lastName || 'none'}</Cell>
      <Cell>{ client && <img src={client.photo} style={{ height: '50px', width: '50px' }} alt="avatar"/>}</Cell>
      <Cell><button onClick={(event) => { event.stopPropagation(); updateCreditProposal({ ...proposal, status: 'archived', client: client.id, loan: loan.id }); }}>Archiver</button>
        <button onClick={(event) => { event.stopPropagation(); updateCreditProposal({ ...proposal, status: 'declined', client: client.id, loan: loan.id });}}>Réfuser</button></Cell>
    </Row>
  )});
  return(
    <AdminLayout>
      <div style={{ maxWidth: '1120px'}}>
      <p>CreditProposalsList</p>
        <Table>
          <Row>
            <Head>ID</Head>
            <Head>Status</Head>
            <Head>Montant</Head>
            <Head>Date du demande</Head>
            <Head>Nom du client</Head>
            <Head>Prénom du client</Head>
            <Head>Avatar</Head>
            <Head>Actions</Head>
          </Row>
          {proposalsView}
        </Table>
      </div>
    </AdminLayout>
  );
};

const mapStateToProps = (state) => ({
  proposals: state.proposals.proposals,
});

export default compose(withRouter, connect(mapStateToProps, { getAllCreditProposals, updateCreditProposal }))(CreditProposalsList)
