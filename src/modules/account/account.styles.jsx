import styled from 'styled-components';
import {
  PRIMARY_SEMI_DARK,
  SECONDARY,
} from '../../shared/styles/theme.variables';
import ProfilePanelImage from '../../assets/images/account/profile.svg';

export const AccountPageContent = styled.section`
  padding: 1rem;
  background-color: #f9fbfb;
  flex: 1;
`;

export const AccountPageContainer = styled.div`
  overflow-x: hidden;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const TailorContent = styled.div`
  height: 200px;
  background-color: ${PRIMARY_SEMI_DARK};
`;

export const MessagesPageContainer = styled.div`
  display: flex;
`;

export const ProfilePanelContainer = styled.div`
  display: flex;
  flex: 0 1 30%;
  margin: 0 1rem;
  background-color: white;
  padding: 1rem;
  border: 1px solid #eeefef;
  border-radius: 4px;
  height: 315px;
  position: sticky;
  top: 76px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  flex-direction: column;
`;

export const ProfilePanelCoverContainer = styled.div`
  background-image: url(${({ src }) => (src ? src : ProfilePanelImage)});
  background-size: cover;
  background-repeat: no-repeat;
  height: 100px;
  width: 100px;
  margin: 0 auto;
  border: 1px solid #eeefef;
  border-radius: 100%;p
`;

export const ProfilePanelUser = styled.p`
  font-size: 19px;
  margin: 7px 0 5px 0;
  font-weight: 700;
  text-transform: capitalize;
  display: block;
  text-align: center;
`;

export const ProfilePanelStatus = styled.p`
  font-size: 14px;
  margin: 0 0 12px 0;
  height: 38px;
  opacity: 0.9;
`;

export const ProfilePanelShareContainer = styled.div`
  display: flex;
  flex-direction: column;

  .header {
    font-size: 15px;
    margin: 10px 0;
    line-height: 1.2;
  }

  .socials {
    display: flex;
    flex-direction: row;

    a {
      width: 30px;
      height: 30px;
      border-radius: 7px;
      overflow: hidden;
      margin-right: 10px;

      img {
        width: 100%;
        height: auto;
      }

      &.fb {
        background-color: #3b5998;
      }

      &.twitter {
        background-color: #55acee;
      }
    }
  }
`;

export const MessagesPanelContainer = styled.div`
  display: flex;
  flex: 1 0;
  margin: 0 1rem;
  background-color: white;
  padding: 1rem;
  border: 1px solid #eeefef;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  flex-direction: column;
`;

export const MessagesPanelHeader = styled.h2`
  color: ${SECONDARY};
  margin: 0;
`;

export const MessagesPanelCount = styled.span`
  font-size: 14px;
  color: inherit;
  opacity: 0.9;
  margin-top: 4px;
`;

export const MessagesListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

export const MessageCardContainer = styled.div`
  border: 1px solid #eeefef;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  margin-bottom: 1rem;
  border-radius: 4px;
`;
