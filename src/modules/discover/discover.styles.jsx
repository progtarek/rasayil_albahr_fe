import styled from 'styled-components';
import { PRIMARY } from '../../shared/styles/theme.variables';
import CloudIcon from '../../assets/images/common/cloud.svg';

export const DiscoverPageContainer = styled.div`
  overflow-x: hidden;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${PRIMARY};
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
  }

  .sea-overlay {
    background-color: #2fbfd1;
    width: 100%;
    height: 200px;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 0;
  }

  .cloud-overlay {
    height: 300px;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;

    span {
      background-image: url(${CloudIcon});
      background-repeat: no-repeat;
      background-size: cover;
      width: 200px;
      height: 100px;
      display: block;
    }
  }
`;
