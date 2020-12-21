import styled from 'styled-components';

export const SocialBarContainer = styled.div`
  display: flex;
  flex-direction: row;

  a {
    width: 30px !important;
    height: 30px !important;
    border-radius: 7px;
    overflow: hidden;
    margin-right: 10px;

    img {
      width: 100% !important;
      height: auto !important;
    }

    &.fb {
      background-color: #3b5998;
    }

    &.twitter {
      background-color: #55acee;
    }

    &.share {
      margin-right: 0;
    }
  }
`;
