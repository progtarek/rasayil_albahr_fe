import FormInput from '../../../shared/components/forms/inputs/input.component';
import CheckboxInput from '../../../shared/components/forms/inputs/checkbox.component';
import { loginAction } from '../../../redux/actions/auth.action';
import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import {
  PageContainer,
  FunkyButton,
  OrSeparator,
  Button,
} from '../../../shared/styles/global.styles';
import {
  LoginPageContainer,
  HeroContainer,
  FormContainer,
  SocialContainer,
  HaveAccountContainer,
} from './login-page.styles';

import FBLogo from '../../../assets/images/socials/facebook.svg';
import TwitterLogo from '../../../assets/images/socials/twitter.svg';
import GoogleLogo from '../../../assets/images/socials/google.svg';

const credentialSchema = Yup.object({
  username: Yup.string().required('This field is required.'),
  password: Yup.string().required('This field is required.'),
});

const initialValues = {
  username: '',
  password: '',
};

const LoginPage = ({ login }) => {
  const [checked, setRememberMe] = useState(false);
  let history = useHistory();

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
          <OrSeparator>
            <span>or</span>
          </OrSeparator>
          <SocialContainer>
            <a href='http://'>
              <img src={FBLogo} alt='login with facebook' />
            </a>
            <a href='http://'>
              <img src={TwitterLogo} alt='login with twitter' />
            </a>
            <a href='http://'>
              <img src={GoogleLogo} alt='login with google' />
            </a>
          </SocialContainer>
          <HaveAccountContainer>
            Don’t have an account yet?{' '}
            <span onClick={() => history.push('/register')}>Sign up</span>
          </HaveAccountContainer>
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
