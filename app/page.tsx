'use client'
import React from 'react';
import './page.module.css';
import { createContext } from 'react'
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
const Context = createContext(0)
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/navbar'
import Services from './components/services'
import Test from './components/faq'
import CookiesMessage from './components/cookies'


 function Home() {
  return (
   <>
    <CookiesMessage />
    <Header />
    <Services />
   </>
  )
}


export default Home;