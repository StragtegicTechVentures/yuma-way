import React from 'react';

import {
  IndexView,
  Home as HomeView,
  Faq as FaqView,
  ContactPage as ContactPageView,
  About as AboutView,
} from 'views';

// import Footers from "layouts/sections/page-sections/footers";

const routes = [
  {
    path: '/',
    renderer: (params = {}) => <IndexView {...params} />,
  },
  {
    path: '/home',
    renderer: (params = {}) => <HomeView {...params} />,
  },
  {
    path: '/faq',
    renderer: (params = {}) => <FaqView {...params} />,
  },
  {
    path: '/contact-page',
    renderer: (params = {}) => <ContactPageView {...params} />,
  },
  {
    path: '/about',
    renderer: (params = {}) => <AboutView {...params} />,
  },
];

export default routes;
