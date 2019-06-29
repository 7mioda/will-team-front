import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllCredits, removeCredit } from '../../actions/creditActions';
import AdminLayout from './AdminLayout';
import { Cell, Head, Row, Table } from '../../components/Table';
import Button from '../../components/Button/Button';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

const CreditsList =  ({ getAllCredits, removeCredit, credits, history }) => {
  useEffect(()=> {
    getAllCredits();
    return () => undefined;
  }, []);
  console.log(credits);
  const creditsView = credits.map(({ id, banner, name, description, interestRate, createdAt }) => (
    <Row key={id}>
      <Cell>{name || 'none'}</Cell>
      <Cell>{description || 'none'}</Cell>
      <Cell>{interestRate || 'none'}</Cell>
      <Cell>{ createdAt || 'none' }</Cell>
      <Cell><img src={banner} style={{ height: '50px', width: '50px', borderRadius: '50%' }} alt="avatar"/></Cell>
      <Cell style={{ width: '210px', display: 'flex', justifyContent: 'space-between', height: '85px'}}><Button color="#fff" background="#e66767"  onClick={() => removeCredit(id)}>Delete</Button>
        <Button color="#fff" background="#303952"  onClick={() => history.push(`/team-will-bank/admin/banker/${id}`)}>update</Button></Cell>
    </Row>
  ));
  return(
    <AdminLayout>
      <div style={{ maxWidth: '1120px'}}>
      <p>CreditListAdmin</p>
        <Button color="#fff" background="#303952" type="button" style={{ float: 'right'}} onClick={() => history.push('/team-will-bank/admin/add-credit')}>Ajouter un type crédit</Button>
        <Table>
          <Row>
            <Head>Nom</Head>
            <Head>Description</Head>
            <Head>Taux d'interet</Head>
            <Head>Date de création</Head>
            <Head>Banner</Head>
            <Head style={{ width: '220px'}}>Actions</Head>
          </Row>
          {creditsView}
        </Table>
      </div>
    </AdminLayout>
  );
};

const mapStateToProps = (state) => ({
  credits: state.credits.credits,
});

export default compose(withRouter, connect(mapStateToProps, { getAllCredits, removeCredit }))(CreditsList)
