import React from 'react';

// Building blocks components main page
import IndexView from 'blocks/IndexView';


const routes = [
  {
    path: '/blocks',
    renderer: (params = {}) => <IndexView {...params} />,
  },
 
];

export default routes;
