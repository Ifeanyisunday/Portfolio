import React, { useState, Suspense } from 'react'
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { Home } from './components/Home'
import Designs from './designs/Designs';
import Frontend from './frontend/frontend';
import Backend from './backend/Backend';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ContactInfo from './components/ContactInfo';


const router = createHashRouter([
      {
        path: '/',
        element: <Home/>,
        
      },
      {
        path:'/designs',
        element: <Designs/>
      },
      {
        path:'/frontend',
        element: <Frontend/>
      },
      {
        path:'/backend',
        element: <Backend/>
      },
      {
        path:'/projects',
        element: <Projects/>
      },
      {
        path:'/contact',
        element: <ContactInfo/>
      },
    ]
  );


export const App = () => {

  return (
    <RouterProvider router={router} />
  )
}


export default App
