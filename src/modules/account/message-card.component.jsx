import React, { useState, useRef, useEffect } from 'react';
import { MessageCardContainer } from './account.styles';
import NewMessageIcon from '../../assets/images/account/message.svg';
import ShareIcon from '../../assets/images/share.svg';

const formateDate = (date) => {
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  };
  return new Date(date).toLocaleDateString('en-EG', options);
};

function MessageCard({ _id, message, createdAt, deleteMessage }) {
  const [actionBarVisibility, setActionsBarVisibility] = useState(false);
  const dropdownMenuRef = useRef(null);

  const handleHideDropdown = (event) => {
    if (event.key === 'Escape') {
      setActionsBarVisibility(false);
    }
  };

  const handleClickOutside = (event) => {
    if (
      dropdownMenuRef.current &&
      !dropdownMenuRef.current.contains(event.target)
    ) {
      setActionsBarVisibility(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleHideDropdown, true);
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('keydown', handleHideDropdown, true);
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  return (
    <MessageCardContainer>
      <div className='media'>
        <img src={NewMessageIcon} alt='got new message' />
        <div className='media-body'>
          <div className='content-bar'>
            <p className='content'>{message}</p>
            <div className='media-actions'>
              <div
                className='trigger'
                onClick={() => setActionsBarVisibility(!actionBarVisibility)}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
              <ul
                className='dropdown-menu'
                ref={dropdownMenuRef}
                style={
                  actionBarVisibility
                    ? { visibility: 'visible' }
                    : { visibility: 'hidden' }
                }
              >
                <li
                  onClick={() => {
                    setActionsBarVisibility(false);
                    return deleteMessage(_id);
                  }}
                >
                  Delete
                </li>
                <li>Block User</li>
              </ul>
            </div>
          </div>
          <div className='media-bar'>
            <p>{formateDate(createdAt)}</p>
            <div className='share'>
              <img src={ShareIcon} alt='share via' />
              {/* <div className="social-bar-modal">
                <SocialBar></SocialBar>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </MessageCardContainer>
  );
}

export default MessageCard;
