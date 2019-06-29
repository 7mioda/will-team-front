import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Layout from '../Layout';
import { getAllClients } from '../../actions/clientActions';

const ClientsList =  ({ getAllClients, clients }) => {
  useEffect(()=> {
    getAllClients();
    return () => undefined;
  }, []);
  console.log(clients);
  return(
    <Layout>
      <p>ClientsList</p>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  clients: state.clients.clients,
});

export default connect(mapStateToProps, { getAllClients })(ClientsList)
