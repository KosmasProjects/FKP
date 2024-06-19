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
import PlayerPage from './pages/MowiaONas/PlayerPage';
import RozwazniIRomantyczni from './pages/RozwazniIRomantyczni';
import WspolnaSprawa from './pages/WspolnaSprawa/index.jsx';
import BimbaWHistorie from './pages/BimbaWHistorie/index.jsx';
import PoznanskieLegendy from './pages/PoznanskieLegendy/index.jsx';
import PomnikiPoznania from './pages/PomnikiPoznania/index.jsx';
import Herstoria from './pages/HerstoriaWartaPoznania/index.jsx';
import LiterackiPoznan from './pages/LiterackiPoznan/index.jsx';

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
        element: <TalkingAboutUs />,
        children: [
          {
            path: 'player/:playerId',
            element: <PlayerPage />
          }
        ]
      },
      {
        path: '/FKP/rozwazniiromantyczni',
        element: <RozwazniIRomantyczni />
      },
      {
        path: '/FKP/ws44',
        element: <WspolnaSprawa />
      },
      {
        path: '/FKP/bimbawhistorie',
        element: <BimbaWHistorie />
      },
      {
        path: '/FKP/poznanskielegendy',
        element: <PoznanskieLegendy />
      },
      {
        path: '/FKP/pomnikipoznania',
        element: <PomnikiPoznania />
      },
      {
        path: '/FKP/ulicznikpoznanski',
        element: <TalkingAboutUs />
      },
      {
        path: '/FKP/literackipoznan',
        element: <LiterackiPoznan />
      },
      {
        path: '/FKP/herstoriawartapoznania',
        element: <Herstoria />
      },
    ]
  },
  ]
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
