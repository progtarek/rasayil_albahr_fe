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
  cursor: pointer;
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

  .media {
    padding: 1rem;
    display: flex;
    flex-direction: row;

    img {
      width: 70px;
      height: auto;
      margin-right: 10px;
    }

    .media-body {
      display: flex;
      flex-direction: column;
      flex: 1;

      p {
        font-size: 14px;
        margin-bottom: 5px;
      }

      span {
        font-size: 12px;
        opacity: 0.5;
      }
    }

    .media-actions {
      margin-left: 10px;
      position: relative;
      margin-left: auto;

      .trigger {
        display: flex;
        cursor: pointer;
        padding: 0.5rem 0;
        opacity: 0.5;

        &:hover {
          opacity: 0.8;
        }

        span {
          width: 5px;
          height: 5px;
          border-radius: 5px;
          background-color: #3d373d;
          margin: 0 1px;
        }
      }

      .dropdown-menu {
        position: absolute;
        right: -10px;
        top: 20px;
        padding: 0.5rem;
        z-index: 1000;
        display: flex;
        min-width: 160px;
        list-style: none;
        flex-direction: column;
        background-color: #fff;
        border: 1px solid rgba(0, 0, 0, 0.05);
        border-radius: 3px;
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
        margin: 0;

        li {
          padding: 8px 0;
          margin: 0 12px;
          cursor: pointer;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          opacity: 0.7;
          font-size: 14px;

          &:last-child {
            border-bottom: none;
            margin-bottom: 0;
          }

          &:hover {
            opacity: 1;
          }
        }
      }
    }

    .content-bar {
      display: flex;
    }

    .media-bar {
      display: flex;
      flex-direction: row;
      color: white;
      padding-top: 8px;
      margin-top: 8px;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      align-items: center;
      justify-content: space-between;

      .share {
        position: relative;

        img {
          width: 22px;
          height: auto;
          cursor: pointer;
          margin: 0;
        }

        .social-bar-modal {
          position: absolute;
          background-color: white;
          border-radius: 4px;
          padding: 8px 12px;
          box-shadow: 0 0px 20px 5px rgba(0, 0, 0, 0.1);
          right: 30px;
          top: -5px;
        }
      }
    }
  }
`;
