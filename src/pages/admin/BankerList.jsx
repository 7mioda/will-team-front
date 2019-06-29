import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllBankers, removeBanker } from '../../actions/bankerActions';
import AdminLayout from './AdminLayout';
import { Table, Cell, Row, Head } from '../../components/Table';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import Button from '../../components/Button/Button';

const BankersList =  ({ getAllBankers, bankers, removeBanker, history }) => {
  useEffect(()=> {
    getAllBankers();
    return () => undefined;
  }, []);
  const bankersView = bankers.map(({ id, photo, firstName, lastName ,registrationNumber, type }) => (
    <Row key={id}>
      <Cell>{firstName || 'none'}</Cell>
      <Cell>{lastName || 'none'}</Cell>
      <Cell>{registrationNumber || 'none'}</Cell>
      <Cell>{type || 'none'}</Cell>
      <Cell><img src={photo} style={{ height: '50px', width: '50px', borderRadius: '50%' }} alt="avatar"/></Cell>
      <Cell style={{ width: '210px', display: 'flex', justifyContent: 'space-between', height: '85px'}}><Button color="#fff" background="#e66767"  onClick={() => removeBanker(id)}>Delete</Button>
      <Button color="#fff" background="#303952"  onClick={() => history.push(`/team-will-bank/admin/banker/${id}`)}>update</Button></Cell>
    </Row>
  ));
  return(
    <AdminLayout>
      <p>Bankers</p>
      <Button color="#fff" background="#303952" type="button" style={{ float: 'right'}} onClick={() => history.push('/team-will-bank/admin/add-banker')}>Ajouter un employee</Button>
      <Table>
      <Row>
        <Head>Nom</Head>
        <Head>Prenom</Head>
        <Head>registrationNumber</Head>
        <Head>type</Head>
        <Head>photo</Head>
        <Head style={{ width: '210px' }}>Actions</Head>
      </Row>
      {bankersView}
      </Table>
    </AdminLayout>
  );
};

const mapStateToProps = (state) => ({
  bankers: state.bankers.bankers,
});

export default compose(connect(mapStateToProps, { getAllBankers, removeBanker }), withRouter)(BankersList);
