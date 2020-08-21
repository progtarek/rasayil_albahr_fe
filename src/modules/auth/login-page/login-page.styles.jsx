import styled from 'styled-components';
import { PRIMARY } from '../../../shared/styles/theme.variables';
import HeroImage from '../../../assets/images/auth/hero.svg';

export const LoginPageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-between;
`;

export const HeroContainer = styled.div`
  height: 100%;
  width: 55vw;
  padding: 1rem;
  background-color: ${PRIMARY};
  background-image: url(${HeroImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const FormContainer = styled.div`
  padding: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  max-width: 420px;
  margin: 0 auto;

  form {
    margin-top: 2rem;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 2rem;
  justify-content: space-around;

  img {
    width: 45px;
    height: 45px;
    cursor: pointer;
  }
`;
