import React, { useEffect } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import Layout from '../Layout';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getAllCreditProposals, updateCreditProposal } from '../../actions/creditProposalActions';
import Button from '../../components/Button/Button';
import Carousel from '../../components/Carousel/Carousel';
import styled from 'styled-components';


const withStyle = (component) => styled(component)`
  max-width: 1120px;
  min-height: 500px;
  padding-top: 80px;
  margin: 0 auto;
  background: url("/img/help.svg") right bottom / 60% 60% no-repeat;
  color: rgb(72, 72, 72);
  font-family: Roboto, sans-serif;
  .help__text {
    margin-top: 100px;
    width: 40%;
    float: left;
  }
  h2 {
    margin-bottom: 20px;
  }
`;

const CreditProposalDetails =  ({ getAllCreditProposals, updateCreditProposal, proposal, isDirector, isBanker, className }) => {
  useEffect(()=> {
    getAllCreditProposals();
    return () => undefined;
  }, []);
  const { client, amount, createdAt ,status, loan, files } = proposal;
  return(
    <Layout>
      <div className={`${className}`}>
        <h2>Détails du demande de crédit</h2>
        <div style={{ width: '70%', height: '500px', float: 'right' }}>
            <Carousel>
              {
                files.map(file => <img src={file} alt=""/>)
              }
            </Carousel>
        </div>
        <div style={{ width: '30%', height: '500px', float: 'left' }}>
         <h4>Score      :</h4><p>{Math.round((files.length / loan.loanPapers.split('/').length) * 100)} %</p>
        <h4>Montant      :</h4><p>{amount}</p>
        <h4>Date de soumission du dossier :</h4><p>{moment(createdAt).format('YYYY-MM-DD')}</p>
        <h4>Statut du dossier :</h4><p>{status}</p>
          <h4>Type du credit  :</h4><p>{loan.name}</p>
        { !(status === 'approved') && isDirector && <Button color="#fff" background="#303952" onClick={(event) => { event.stopPropagation(); updateCreditProposal({ ...proposal, status: 'approved', client: client.id, loan: loan.id }); }}>Approuver</Button> }
        { !(status === 'archived') && isBanker && <Button color="#fff" background="#303952" onClick={(event) => { event.stopPropagation(); updateCreditProposal({ ...proposal, status: 'archived', client: client.id, loan: loan.id }); }}>Archiver</Button> }
        { !(status === 'archived') && isBanker && <Button color="#fff" background="#303952" onClick={(event) => { event.stopPropagation(); updateCreditProposal({ ...proposal, status: 'verified', client: client.id, loan: loan.id }); }}>verified</Button> }
        { !(status === 'declined') && isDirector &&<Button color="#fff" background="#e66767" onClick={(event) => { event.stopPropagation(); updateCreditProposal({ ...proposal, status: 'declined', client: client.id, loan: loan.id });}}>Réfuser </Button> }
        </div>
      </div>
    </Layout>
  );
};

const mapStateToProps = (
                         {auth: { as: role, isAuthenticated }, proposals},
                         { match: { params: { proposalId } }}) => ({
  proposal: proposals.proposals.find((proposal) => proposal.id === proposalId ),
  isDirector: isAuthenticated && role === 'director',
  isBanker: isAuthenticated && role === 'banker'
});

export default compose(withRouter, connect(mapStateToProps, { getAllCreditProposals, updateCreditProposal }), withStyle)(CreditProposalDetails)
