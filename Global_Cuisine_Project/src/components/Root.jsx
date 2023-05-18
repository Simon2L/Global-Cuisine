import React from 'react'
import { Outlet } from "react-router-dom";
import Navbar from '../components/NavBar/navbar'
import Footer from './Footer/Footer';

export default function Root() {
  return (
    <div>
          <Navbar />
          <hr></hr>
         <Outlet />
         <hr />
         <Footer/>
    </div>
  )
}


