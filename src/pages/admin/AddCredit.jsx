import React, { useState } from 'react';
import { connect } from 'react-redux';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { Formik } from 'formik/dist/index';
import AdminLayout from './AdminLayout';
import { addCredit } from '../../actions/creditActions';

const AddCredit =  ({ addCredit }) => {
  const [image, setImage] = useState({});
  return(
    <AdminLayout>
      <p>Add Banker</p>
      <div style={{ width: '500px', marginLeft: '150px' }}>
        <Formik
          initialValues={{ name: '', description: '', interestRate: '', photo: '', loanPapers: '' }}
          onSubmit={(values) => {addCredit({ ...values, photo: image }) }}
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
                      placeholder="Nom du pret"
                      name="name"
                      value={values.name}
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
                      placeholder="Description"
                      name="description"
                      value={values.description}
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
                      placeholder="Taux d'intert"
                      name="interestRate"
                      value={values.interestRate}
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
                      placeholder="papiers nécessaires"
                      name="loanPapers"
                      value={values.loanPapers}
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


export default connect(null, { addCredit })(AddCredit)
