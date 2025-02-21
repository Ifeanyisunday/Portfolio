import React, { useState, Suspense } from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { Home } from './components/Home'
import Designs from './designs/Designs';
import Frontend from './frontend/frontend';
import Backend from './backend/Backend';

const basename = process.env.NODE_ENV === 'development' ? '/' : '/Portfolio';

const router = createBrowserRouter([
      {
        path: '/',
        element: <Home/>,
        
      },
      {
        path:"/designs",
        element: <Designs/>
      },
      {
        path:"/frontend",
        element: <Frontend/>
      },
      {
        path:"/backend",
        element: <Backend/>
      },
    ],
    { basename }
  );


export const App = () => {

  return (
    <RouterProvider router={router} />
  )
}


export default App
