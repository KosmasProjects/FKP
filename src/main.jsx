import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/Home';
import Blog from './pages/Aktualnosci';
import Fundacja from './pages/Fundacja';
import Friends from './pages/Przyjaciele';
import HelpUs from './pages/Wesprzyj';
import Contact from './pages/Kontakt';
import { RouterProvider } from 'react-router-dom'
import TalkingAboutUs from './pages/MowiaONas';

const router = createBrowserRouter(
  [{
    path: '/FKP/',
    element: <App />,
    children: [
      {
        path: '/FKP/',
        element: <HomePage />
      },
      {
        path: '/FKP/aktualnosci',
        element: <Blog />
      },
      {
        path: '/FKP/fundacja',
        element: <Fundacja />
      },
      {
        path: '/FKP/przyjaciele',
        element: <Friends />
      },
      {
        path: '/FKP/wesprzyj',
        element: <HelpUs />
      },
      {
        path: '/FKP/kontakt',
        element: <Contact />
      },
      {
        path: '/FKP/mowia-o-nas',
        element: <TalkingAboutUs />
      }
    ]
  },
  ]
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
