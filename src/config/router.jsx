import React from 'react';
import HomePage from '../pages/Home';
import Blog from '../pages/Aktualnosci';
import Fundacja from '../pages/Fundacja';
import Friends from '../pages/Przyjaciele';
import HelpUs from '../pages/Wesprzyj';
import Contact from '../pages/Kontakt';

export const routes = [
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
    }
]