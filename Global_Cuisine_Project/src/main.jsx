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
import RecipeView from './components/RecipeView'


//#region sätter upp Routing
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />, // en error sida om något går fel
    children: [
      {
        index: true, element: <Home /> 
      },
      {
        path: "searched/:search",
        element: // här visas sök resulatet
        <>
          <h1>searchResult</h1> 
          <hr></hr>
        </>
      },
      {
        path: "recipes/:recipeId", // här visas receptet
        element: 
        <>
          <RecipeView />
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
