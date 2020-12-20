import React, { useState } from 'react';
import { MessageCardContainer } from './account.styles';
import NewMessageIcon from '../../assets/images/account/message.svg';
import ShareIcon from '../../assets/images/share.svg';
import SocialBar from '../../shared/components/social-bar/social-bar.component';

const formateDate = (date) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true };
  return new Date(date).toLocaleDateString('en-EG', options);
}

function MessageCard({ message, createdAt }) {
  const [visible, setVisibility] = useState(false);

  return <MessageCardContainer>
    <div className='media'>
      <img src={NewMessageIcon} alt='got new message' />
      <div className='media-body'>
        <p className='content'>{message}</p>
        <div className='media-bar'>
          {/* <span>December 18th 2020, 8:45 pm</span> */}
          <span>{formateDate(createdAt)}</span>
          <div className='share'>
            <img src={ShareIcon} alt='share via' onClick={() => setVisibility(!visible)} />
            <div className='social-bar-modal' style={visible ? { visibility: 'visible' } : { visibility: 'hidden' }}>
              <SocialBar></SocialBar>
            </div>
          </div>
        </div>
      </div>
      <div className='media-actions'>
        <div className='trigger'>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className='dropdown-menu'>
          <li>Delete</li>
          <li>Block User</li>
        </ul>
      </div>
    </div>
  </MessageCardContainer>;
}

export default MessageCard;
