/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import left from '../../assets/Home Page/Footer/left.png'
import right from '../../assets/Home Page/Footer/right.png'
import CTA from './CTA/CTA'
import MainFooter from './MainFooter/MainFooter'

export default function Footer() {
  return (
    <>
    <footer className='mt-4'>
        <CTA/>
        <MainFooter/>

    </footer>
    
    
    
    </>
  )
}
