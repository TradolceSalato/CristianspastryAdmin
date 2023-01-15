
import React from 'react'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import NavBar from './NavBar'
import Footer from './Footer'

type Props = {
    children : any,
}

export default function Layout({children}:any) {
  return (
    <>
     <NavBar/>
        <main>{children}</main>
      <Footer/>
    </>
  )
}
  
