/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import RightAbout from './RightAbout/RightAbout'
import LeftAbout from './LeftAbout/LeftAbout'
import OurValue from './OurValue/OurValue'
import OurAchi from './OurAchi/OurAchi'
import { useLocation } from 'react-router-dom'
import Navigation from './Navigation/Navigation'
import Teams from './Teams/Teams'
import ValuedClient from './ValuedClient/ValuedClient'

export default function About() {
    const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
     <section>
        <div className="grid grid-cols-12 overflow-hidden ">
          <LeftAbout />
          <RightAbout />
        </div>
          <OurValue/>
          <OurAchi/>
          <Navigation/>
          <Teams/>
          <ValuedClient/>
      </section>
    
    
    
    
    </>
  )
}
