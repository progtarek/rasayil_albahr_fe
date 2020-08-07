import React from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import FormInput from '../../../shared/components/forms/inputs/input.component';
import { connect } from 'react-redux';
import { loginAction } from '../../../redux/actions/auth.action';

const credentialSchema = Yup.object({
  username: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
});

const initialValues = {
  username: '',
  password: '',
};

const LoginPage = ({ login }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={credentialSchema}
      onSubmit={(credentials, { setSubmitting }) => {
        login(credentials);
        setSubmitting(false);
      }}
    >
      <Form>
        <FormInput
          label='Username'
          name='username'
          type='text'
          id='username'
          placeholder='enter username'
        />
        <FormInput
          label='Password'
          name='password'
          type='password'
          id='password'
          placeholder='enter password'
        />
        <button type='submit'>Submit</button>
      </Form>
    </Formik>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (credentials) => dispatch(loginAction(credentials)),
  };
};

export default connect(null, mapDispatchToProps)(LoginPage);
