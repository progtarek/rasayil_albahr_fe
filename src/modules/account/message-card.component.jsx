import React from 'react';
import { MessageCardContainer } from './account.styles';
import NewMessageIcon from '../../assets/images/account/message.svg';
import ShareIcon from '../../assets/images/share.svg';

function MessageCard() {
  return <MessageCardContainer>
    <div className='media'>
      <img src={NewMessageIcon} alt='got new message' />
      <div className='media-body'>
        <p className='content'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam corporis nesciunt doloremque ducimus, vero aspernatur animi optio? Labore distinctio, dolores voluptates itaque aperiam magni veritatis voluptatem, quidem ea fuga voluptate!</p>
        <div className='media-bar'>
          <span>December 18th 2020, 8:45 pm</span>
          <div className='share'>
            <img src={ShareIcon} alt='share via'/>
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
