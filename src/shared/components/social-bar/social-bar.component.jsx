import React from 'react'
import { SocialBarContainer } from './social-bar.style'
import FBIcon from '../../../assets/images/socials/facebook.svg';
import TwitterIcon from '../../../assets/images/socials/twitter.svg';
import InstagramIcon from '../../../assets/images/socials/instagram.svg';
import WhatsIcon from '../../../assets/images/socials/whatsapp.svg';
import CopyIcon from '../../../assets/images/socials/copy.svg';


function SocialBar() {
  return (
    <SocialBarContainer>
      <a className='fb' href=''>
        <img src={FBIcon} alt='share via Facebook' />
      </a>
      <a className='twitter' href=''>
        <img src={TwitterIcon} alt='share via Twitter' />
      </a>
      <a className='instagram' href=''>
        <img src={InstagramIcon} alt='share via Instagram' />
      </a>
      <a className='whatsapp' href=''>
        <img src={WhatsIcon} alt='share via Whatsapp' />
      </a>
      <a className='copy' href=''>
        <img src={CopyIcon} alt='copy link' />
      </a>
    </SocialBarContainer>
  )
}

export default SocialBar
