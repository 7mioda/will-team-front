import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Layout from '../Layout';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getAllClients } from '../../actions/clientActions';

const ClientDetails =  ({ getAllClients, client }) => {
  useEffect(()=> {
    getAllClients();
    return () => undefined;
  }, []);
  console.log(client);
  return(
    <Layout>
      <p>clientDetails</p>
    </Layout>
  );
};

const mapStateToProps = (state, { match: { params: { clientId } }}) => ({
  client: state.clients.clients.find((client) => client.id === clientId ),
});

export default compose(connect(mapStateToProps, { getAllClients }), withRouter)(ClientDetails)
