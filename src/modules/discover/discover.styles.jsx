import styled, { keyframes } from 'styled-components';
import { PRIMARY } from '../../shared/styles/theme.variables';
import BackgroundIcon from '../../assets/images/account/account-background.png';

export const DiscoverPageContainer = styled.div`
  overflow-x: hidden;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${PRIMARY};
  background-image: url(${BackgroundIcon});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center bottom 255px;

  @media (min-width: 1300px) {
    background-position: center bottom 305px;
  }
`;

const opacity = keyframes`
  0% {
    opacity: 0.5;
  }

  50% {
    opacity: 0.8;
  }

  100% {
    opacity: 0.5;
  }
`;

export const DiscoverPageContent = styled.div`
  padding: 1rem;
  flex: 1;
  display: flex;
  justify-content: center;
  position: relative;

  .island {
    max-height: 400px;
    width: auto;
    flex: 1;
    align-self: flex-end;
    position: relative;
    z-index: 2;
    margin-bottom: 1rem;

    @media (min-width: 1300px) {
      max-height: 450px;
      margin-bottom: 2rem;
    }
  }

  .sea-overlay {
    background-color: #2fbfd1;
    width: 100%;
    height: 200px;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 0;
    transition: 0.5s all;

    @media (min-width: 1300px) {
      height: 250px;
    }
  }

  .cloud {
    display: flex;
    position: absolute;
    width: 200px;
    opacity: 0.8;
    transition: 0.5s all;

    img {
      width: 100%;
      height: auto;
    }

    &:first-child {
      top: 16%;
      left: 4%;
      width: 220px;
      animation: ${opacity} 5s ease-in-out infinite;
    }

    &:nth-child(2) {
      top: 10%;
      right: 24%;
      width: 180px;
      animation: ${opacity} 7s ease-in-out infinite;
    }

    &:nth-child(3) {
      width: 220px;
      top: 27%;
      right: -80px;
      animation: ${opacity} 9s ease-in-out infinite;
    }

    &:nth-child(4) {
      top: 32%;
      left: 24%;
      width: 200px;
      animation: ${opacity} 3s ease-in-out infinite;
    }

    @media (max-width: 768px) {
      &:first-child {
        top: 20%;
        left: -50px;
        width: 220px;
      }

      &:nth-child(2) {
        top: 10%;
        right: 3%;
        width: 200;
      }

      &:nth-child(n + 3) {
        display: none;
      }
    }
  }
`;
