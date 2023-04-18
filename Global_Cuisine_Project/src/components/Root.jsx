import React from 'react'
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <div>
        <div>Header</div>
        <hr></hr>
         <Outlet />
    </div>
  )
}

export default Root