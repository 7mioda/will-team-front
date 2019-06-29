import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllBankers, removeBanker } from '../../actions/bankerActions';
import AdminLayout from './AdminLayout';
import { Table, Cell, Row, Head } from '../../components/Table';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import BankerDetails from './BankerDetails';

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
      <Cell><button onClick={() => removeBanker(id)}>Delete</button>
      <button onClick={() => history.push(`/team-will-bank/admin/banker/${id}`)}>update</button></Cell>
      <Cell><img src={photo} style={{ height: '50px', width: '50px' }} alt="avatar"/></Cell>
    </Row>
  ));
  return(
    <AdminLayout>
      <p>Bankers</p>
      <button type="button" style={{ float: 'right'}} onClick={() => history.push('/team-will-bank/admin/add-banker')}>Add Banker</button>
      <Table>
      <Row>
        <Head>Nom</Head>
        <Head>Prenom</Head>
        <Head>registrationNumber</Head>
        <Head>type</Head>
        <Head>Actions</Head>
        <Head>photo</Head>
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
