import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import moment from 'moment';
import { withRouter } from 'react-router-dom';
import AdminLayout from './AdminLayout';
import { getAllCreditProposals, updateCreditProposal } from '../../actions/creditProposalActions';
import { Cell, Head, Row, Table } from '../../components/Table';
import Button from '../../components/Button/Button';

const CreditProposalsList =  ({ getAllCreditProposals, updateCreditProposal, isDirector, isBanker, proposals, history }) => {
  useEffect(()=> {
    getAllCreditProposals();
    return () => undefined;
  }, []);
  console.log(proposals);
  const proposalsView = proposals.map((proposal) => {
    const { id, client, amount, createdAt ,status, loan, files } = proposal;
    return(
    <Row key={id} onClick={() => history.push(`/team-will-bank/admin/credit-proposal/${id}`)}>
      <Cell>{ status || 'none'}</Cell>
      <Cell>{ amount || 'none'}</Cell>
      <Cell>{ moment(createdAt).format('YYYY-MM-DD') || 'none'}</Cell>
      <Cell>{Math.round((files.length / loan.loanPapers.split('/').length) * 100)} %</Cell>
      <Cell>{ client && client.firstName || 'none'}</Cell>
      <Cell>{ client && client.lastName || 'none'}</Cell>
      <Cell>{ client && <img src={client.photo} style={{ height: '50px', width: '50px', borderRadius: '40%' }} alt="avatar"/>}</Cell>
      <Cell  style={{ width: 'auto', display: 'flex', justifyContent: 'space-between', height: '85px'}}>
        { !(status === 'approved') && isDirector && <Button color="#fff" background="#303952" onClick={(event) => { event.stopPropagation(); updateCreditProposal({ ...proposal, status: 'approved', client: client.id, loan: loan.id }); }}>Approuver</Button> }
        { !(status === 'archived') && isBanker && <Button color="#fff" background="#303952" onClick={(event) => { event.stopPropagation(); updateCreditProposal({ ...proposal, status: 'archived', client: client.id, loan: loan.id }); }}>Archiver</Button> }
        { !(status === 'archived') && isBanker && <Button color="#fff" background="#303952" onClick={(event) => { event.stopPropagation(); updateCreditProposal({ ...proposal, status: 'verified', client: client.id, loan: loan.id }); }}>verified</Button> }
        { !(status === 'declined') && isDirector &&<Button color="#fff" background="#e66767" onClick={(event) => { event.stopPropagation(); updateCreditProposal({ ...proposal, status: 'declined', client: client.id, loan: loan.id });}}>Réfuser </Button> }
      </Cell>
    </Row>
  )});
  return(
    <AdminLayout>
      <div style={{ maxWidth: '1120px'}}>
      <p>CreditProposalsList</p>
        <Table>
          <Row>
            <Head>Status</Head>
            <Head>Montant</Head>
            <Head>Date du demande</Head>
            <Head>Score</Head>
            <Head>Nom du client</Head>
            <Head>Prénom du client</Head>
            <Head>Avatar</Head>
            <Head style={{ width: 'auto'}}>Actions</Head>
          </Row>
          {proposalsView}
        </Table>
      </div>
    </AdminLayout>
  );
};

const mapStateToProps = ({ proposals, auth: { as: role, isAuthenticated } }) => ({
  proposals: proposals.proposals,
  isDirector: isAuthenticated && role === 'director',
  isBanker: isAuthenticated && role === 'banker'
});

export default compose(withRouter, connect(mapStateToProps, { getAllCreditProposals, updateCreditProposal }))(CreditProposalsList)
