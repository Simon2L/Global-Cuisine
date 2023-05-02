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
import About from './Pages/About';
import Contact from './Pages/Contact';


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
          
        </>
      },
      {
       path: "about",
       element:  
       <>
       <About />       
     </>
      },
      {
        path: "contact",
        element:  
        <>
       <Contact />
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
