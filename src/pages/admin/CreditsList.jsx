import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllCredits } from '../../actions/creditActions';
import AdminLayout from './AdminLayout';

const CreditsList =  ({ getAllCredits, credits }) => {
  useEffect(()=> {
    getAllCredits();
    return () => undefined;
  }, []);
  console.log(credits);
  return(
    <AdminLayout>
      <div style={{ maxWidth: '1120px'}}>
      <p>CreditList</p>
      </div>
    </AdminLayout>
  );
};

const mapStateToProps = (state) => ({
  credits: state.credits.credits,
});

export default connect(mapStateToProps, { getAllCredits })(CreditsList)
