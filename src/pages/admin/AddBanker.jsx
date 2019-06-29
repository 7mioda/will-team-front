import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { addBanker } from '../../actions/bankerActions';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { Formik } from 'formik/dist/index';
import AdminLayout from './AdminLayout';

const AddBanker =  ({ addBanker }) => {
  const [image, setImage] = useState({});
  useEffect(()=> {
    addBanker();
    return () => undefined;
  }, []);
  return(
    <AdminLayout>
      <p>Add Banker</p>
      <div style={{ width: '500px', marginLeft: '150px' }}>
      <Formik
        initialValues={{ firstName: '', lastName: '', password: '', photo: '', email: '', registrationNumber: '' }}
        onSubmit={(values) => {addBanker({ ...values, photo: image }) }}
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
              placeholder="Nom"
              name="firstName"
              value={values.firstName}
              id="search-input"
              onChange={handleChange}
            />
          </div>
          <div className="search-input">
            <Input
              type="text"
              highlighted
              classNames={['text-field']}
              autoCapitalize
              placeholder="Prenom"
              name="lastName"
              value={values.lastName}
              id="search-input"
              onChange={handleChange}
            />
          </div>
          <div className="search-input">
            <Input
              type="email"
              highlighted
              classNames={['text-field']}
              autoCapitalize
              placeholder="Jhon@doe.com"
              name="email"
              value={values.email}
              id="search-input"
              onChange={handleChange}
            />
          </div>
          <div className="search-input">
            <Input
              type="password"
              highlighted
              classNames={['text-field']}
              autoCapitalize
              placeholder="*********"
              name="password"
              value={values.password}
              id="search-input"
              onChange={handleChange}
            />
          </div>
          <div className="search-input">
            <Input
              type="text"
              highlighted
              classNames={['text-field']}
              autoCapitalize
              placeholder="Matricule"
              name="registrationNumber"
              value={values.registrationNumber}
              id="search-input"
              onChange={handleChange}
            />
          </div>
          <div className="search-input">
            <Input
              type="file"
              highlighted
              classNames={['text-field']}
              autoCapitalize
              placeholder="Nom"
              name="photo"
              value={image.filename}
              id="search-input"
              onChange={({ target: { files } }) => setImage(files[0])}
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
    </AdminLayout>
  );
};


export default connect(null, { addBanker })(AddBanker)
