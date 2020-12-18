import FormInput from '../../../shared/components/forms/inputs/input.component';
import { registerAction } from '../../../redux/actions/auth.action';
import React from 'react';
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
  RegisterPageContainer,
  HeroContainer,
  FormContainer,
  SocialContainer,
  HaveAccountContainer,
} from './register-page.styles';
import { NavLink } from 'react-router-dom';

import FBLogo from '../../../assets/images/socials/facebook.svg';
import TwitterLogo from '../../../assets/images/socials/twitter.svg';
import GoogleLogo from '../../../assets/images/socials/google.svg';
import { ErrorMessage } from '../../../shared/components/forms/inputs/input.styles';

const credentialSchema = Yup.object({
  username: Yup.string().required('This field is required.'),
  email: Yup.string()
    .email('Invalid email format.')
    .required('This field is required.'),
  password: Yup.string().required('This field is required.'),
});

const initialValues = {
  username: '',
  email: '',
  password: '',
};

const RegisterPage = ({ register, hasError }) => {
  return (
    <PageContainer>
      <RegisterPageContainer>
        <HeroContainer></HeroContainer>
        <FormContainer>
          <FunkyButton>Aloha</FunkyButton>
          <p>let's send you to your island</p>
          <Formik
            initialValues={initialValues}
            validationSchema={credentialSchema}
            onSubmit={(credentials, { setSubmitting }) => {
              register(credentials);
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
              {hasError ? <ErrorMessage>{hasError}</ErrorMessage> : null}
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

              <Button className='btn-primary' type='submit'>
                Sign up
              </Button>
            </Form>
          </Formik>
          <OrSeparator>
            <span>or</span>
          </OrSeparator>
          <SocialContainer>
            <a href={process.env.REACT_APP_API_URL + '/auth/facebook-login'}>
              <img src={FBLogo} alt='sign up with facebook' />
            </a>
            <a href='http://'>
              <img src={TwitterLogo} alt='signup with twitter' />
            </a>
            <a href={process.env.REACT_APP_API_URL + '/auth/google-login'}>
              <img src={GoogleLogo} alt='sign up with google' />
            </a>
          </SocialContainer>
          <HaveAccountContainer>
            Already have account?{' '}
            <span>
              <NavLink to='/login'>Login</NavLink>
            </span>
          </HaveAccountContainer>
        </FormContainer>
      </RegisterPageContainer>
    </PageContainer>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (credentials) => dispatch(registerAction(credentials)),
  };
};

const mapStateToProps = ({ auth }) => ({
  hasError: auth.hasError,
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
