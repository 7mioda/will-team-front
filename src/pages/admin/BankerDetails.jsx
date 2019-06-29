import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Layout from '../Layout';
import { getAllBankers } from '../../actions/bankerActions';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

const BankerDetails =  ({ getAllBankers, banker  }) => {
  useEffect(()=> {
    getAllBankers();
    return () => undefined;
  }, []);
  console.log(banker);
  return(
    <Layout>
      <p>Bankers</p>
    </Layout>
  );
};

const mapStateToProps = (state, { match: { params: { bankerId } }}) => ({
  banker: state.bankers.bankers.find((banker) => banker.id === bankerId ),
});

export default compose(connect(mapStateToProps, { getAllBankers }), withRouter)(BankerDetails)
