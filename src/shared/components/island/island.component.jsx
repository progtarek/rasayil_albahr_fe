import React from 'react';
import IslandIcon from '../../../assets/images/account/island.svg';
import CloudIcon from '../../../assets/images/common/cloud.svg';
import { IslandContainer } from './island.styles';

function Island() {
  return (
    <IslandContainer>
      <span className='cloud'>
        <img src={CloudIcon} alt='cloud' />
      </span>
      <span className='cloud'>
        <img src={CloudIcon} alt='cloud' />
      </span>
      <span className='cloud'>
        <img src={CloudIcon} alt='cloud' />
      </span>
      <span className='cloud'>
        <img src={CloudIcon} alt='cloud' />
      </span>

      <img src={IslandIcon} alt='my island' className='island' />
      <div className='sea-overlay'></div>
    </IslandContainer>
  );
}

export default Island;
