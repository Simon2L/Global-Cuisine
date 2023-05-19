import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from './components/Root'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home' 
import ErrorPage from './Pages/error-page';
import RecipeView from './components/RecipeView'
import About from './Pages/About';
import Contact from './Pages/Contact';
import TheTeam from './Pages/TheTeam'
import ScrollToTop from './components/ScrollToTop';


//#region sätter upp Routing
const router = createBrowserRouter([
  {
    path: "/",
    element: <ScrollToTop><Root /></ScrollToTop>,
    errorElement: <ScrollToTop><ErrorPage /></ScrollToTop>, // en error sida om något går fel
    children: [
      {
        index: true, element: <ScrollToTop><Home /></ScrollToTop>
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
          <ScrollToTop>
            <RecipeView />
          </ScrollToTop>
          
          
        </>
      },
      {
       path: "about",
       element:  
       <>
       <ScrollToTop>
         <About /> 
       </ScrollToTop>
            
     </>
      },
      {
        path: "contact",
        element:  
        <>
        <ScrollToTop>
            <Contact />
        </ScrollToTop>
       
      </>
       },
       {
        path: "theTeam",
        element:  
        <>
        <ScrollToTop>
          <TheTeam />
        </ScrollToTop>
       
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
