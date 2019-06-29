import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import { Formik } from 'formik/dist/index';
import Layout from './Layout';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { addCreditProposal } from '../actions/creditProposalActions';

const CreditProposal =  ({ addCreditProposal, credit, client }) => {
  const [files, setFiles] = useState([]);
  useEffect(()=> {
    return () => undefined;
  }, []);
  const { id, banner, name, description, loanPapers } = credit;
  return(
    <Layout>
      <p>Credit proposal</p>
      <div style={{ maxWidth: '1120px', margin: '10px auto' }}>
        <p>CreditDetails</p>
        <img src={banner} style={{ width: '550px', height: '250px' }} alt="banner"/>
        <h3>{name}</h3>
        <p>{description}</p>
        <p>{loanPapers}</p>
      </div>
      <div style={{ width: '500px', marginLeft: '150px' }}>
        <Formik
          initialValues={{ amount: 0 }}
          onSubmit={(values) => { addCreditProposal({ ...values, loan: id, files, client }) }}
        >
          {(props) => {
            const {
              values,
              handleChange,
              handleSubmit,
            } = props;
            return (
              <div className="landing-search">
                <form className="add-banker__form">
                  <div className="search-input">
                    <Input
                      type="text"
                      highlighted
                      classNames={['text-field']}
                      autoCapitalize
                      placeholder="Montant"
                      name="amount"
                      value={values.email}
                      id="search-input"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="search-input">
                    <Input
                      type="file"
                      highlighted
                      multiple
                      classNames={['text-field']}
                      autoCapitalize
                      placeholder="Nom"
                      name="photo"
                      value={files.filename}
                      id="search-input"
                      onChange={({ target: { files } }) => setFiles(files)}
                    />
                  </div>
                  <div className="half" />
                  <div className="half">
                    <Button
                      animated
                      color="white"
                      background="#ff5a5f"
                      classNames={['landing-search__btn']}
                      onClick={handleSubmit}
                    >
                      Ajouter
                    </Button>
                  </div>
                </form>
              </div>)}}
        </Formik>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state, { match: { params: { creditId } }}) => ({
  credit: state.credits.credits.find((credit) => credit.id === creditId ) || {},
  client: state.auth.user.id,
});


export default compose(withRouter, connect(mapStateToProps, { addCreditProposal }))(CreditProposal)
