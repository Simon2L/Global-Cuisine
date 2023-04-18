import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from './components/Root'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home' 
import ErrorPage from "./Pages/error-page";


//#region sätter upp Routing
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, element: <Home />
      },
      {
        path: "searched/:search",
        element: 
        <>
          <h1>searchResult</h1>
          <hr></hr>
        </>
      },
      {
        path: "recipes/:recipeId",
        element: 
        <>
          <h1>Recipe</h1>
          <hr></hr>
        </>
      },
      {
       path: "about",
       element:  
       <>
       <h1>About us</h1>
       <hr></hr>
     </>
      },
      {
        path: "contact",
        element:  
        <>
        <h1>Contact us here</h1>
        <hr></hr>
      </>
       }
]
},
]);
//#endregion
  
        
         


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
