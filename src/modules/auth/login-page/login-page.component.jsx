import FormInput from '../../../shared/components/forms/inputs/input.component';
import CheckboxInput from '../../../shared/components/forms/inputs/checkbox.component';
import { loginAction } from '../../../redux/actions/auth.action';
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
import { NavLink } from 'react-router-dom';

const credentialSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email format.')
    .required('This field is required.'),
  password: Yup.string().required('This field is required.'),
});

const initialValues = {
  email: '',
  password: '',
};

const LoginPage = ({ login }) => {
  const [checked, setRememberMe] = useState(false);

  return (
    <PageContainer>
      <LoginPageContainer>
        <HeroContainer></HeroContainer>
        <FormContainer>
          <FunkyButton>Welcome back</FunkyButton>
          <p>You have missed a lot of action.</p>
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
                label='E-mail'
                name='email'
                type='email'
                id='email'
                placeholder='enter email'
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
            <a href={process.env.REACT_APP_API_URL + '/auth/facebook-login'}>
              <img src={FBLogo} alt='login with facebook' />
            </a>
            <a href='http://'>
              <img src={TwitterLogo} alt='login with twitter' />
            </a>
            <a href={process.env.REACT_APP_API_URL + '/auth/google-login'}>
              <img src={GoogleLogo} alt='login with google' />
            </a>
          </SocialContainer>
          <HaveAccountContainer>
            Don’t have an account yet?{' '}
            <span>
              <NavLink to='/register'>Sign up</NavLink>
            </span>
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
