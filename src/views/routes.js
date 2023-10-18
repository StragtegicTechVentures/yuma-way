import React from 'react';

import {
  Home as HomeView,
  Faq as FaqView,
  ContactPage as ContactPageView,
  About as AboutView,
} from 'views';

// import Footers from "layouts/sections/page-sections/footers";

const routes = [
  {
    path: '/',
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
