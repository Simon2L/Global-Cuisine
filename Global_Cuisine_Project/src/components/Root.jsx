import React from 'react'
import { Outlet } from "react-router-dom";
import Navbar from '../components/NavBar/navbar'

export default function Root() {
  return (
    <div>
          <Navbar />
          <hr></hr>
         <Outlet />
    </div>
  )
}


