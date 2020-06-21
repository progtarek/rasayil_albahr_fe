import React from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import FormInput from '../../../shared/components/forms/inputs/input.component';

const credentialSchema = Yup.object({
  mobile: Yup.string()
    .length(11, 'Invalid mobile number.')
    .required('Required'),
  password: Yup.string().required('Required'),
});

const initialValues = {
  mobile: '',
  password: '',
};

const handleSubmit = (values, { setSubmitting }) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  }, 400);
};

const LoginPage = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={credentialSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <FormInput
          label='Mobile number'
          name='mobile'
          type='input'
          id='mobile'
          placeholder='mobile number'
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

export default LoginPage;
