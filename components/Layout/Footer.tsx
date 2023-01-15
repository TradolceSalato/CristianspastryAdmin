

import Link from 'next/link';
import React from 'react'
import { Constants } from '../../utils/constants';

const Footer = () => {
  return (
    <>
  <footer className='footer'>
    Copyright © 2023 {" Creato Da "} <Link href={"#social-nettworks"}>{Constants.Author}</Link>.
  </footer>
  </>
  )
}


export default Footer;