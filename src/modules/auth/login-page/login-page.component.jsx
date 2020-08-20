import FormInput from '../../../shared/components/forms/inputs/input.component';
import CheckboxInput from '../../../shared/components/forms/inputs/checkbox.component';
import { loginAction } from '../../../redux/actions/auth.action';
import { Formik, Form } from 'formik';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import React, { useState } from 'react';
import {
  PageContainer,
  FunkyButton,
  Button,
} from '../../../shared/styles/global.styles';
import {
  LoginPageContainer,
  HeroContainer,
  FormContainer,
} from './login-page.styles';

const credentialSchema = Yup.object({
  username: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
});

const initialValues = {
  username: '',
  password: '',
};

const LoginPage = ({ login }) => {
  const [checked, setRememberMe] = useState(false);
  return (
    <PageContainer>
      <LoginPageContainer>
        <HeroContainer></HeroContainer>
        <FormContainer>
          <FunkyButton>Aloha</FunkyButton>
          <p>let's send you to your island</p>
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
              <CheckboxInput
                type='checkbox'
                name='remember_me'
                label='Remember me'
                checked={checked}
                onClick={() => setRememberMe(!checked)}
              />
              <Button className='btn-primary' type='submit'>
                Log in
              </Button>
            </Form>
          </Formik>
        </FormContainer>
      </LoginPageContainer>
    </PageContainer>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (credentials) => dispatch(loginAction(credentials)),
  };
};

export default connect(null, mapDispatchToProps)(LoginPage);
