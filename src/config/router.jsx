import React from 'react';
import HomePage from '../pages/Home';
import Blog from '../pages/Aktualnosci';
import Fundacja from '../pages/Fundacja';
import Friends from '../pages/Przyjaciele';
import HelpUs from '../pages/Wesprzyj';
import Contact from '../pages/Kontakt';

export const routes = [
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/aktualnosci',
        element: <Blog />
    },
    {
        path: '/fundacja',
        element: <Fundacja />
    },
    {
        path: '/przyjaciele',
        element: <Friends />
    },
    {
        path: '/wesprzyj',
        element: <HelpUs />
    },
    {
        path: '/kontakt',
        element: <Contact />
    }
]