import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Homepage from './pages/Homepage';
import PrivacyStatement from './pages/PrivacyStatement';
import NotFound from './pages/NotFound';

const RootModule: React.FC = () => {
  // The RootModule is responsible for everything that happens at the root levels and all of its content.
  // It is responsible for the home page (located at "/") as well as the 404 page.
  // It also controls the routes for all of its components.
  // In thie particular example, we only have one component, so we only need one route.

  return (
    <Routes>
       <Route path='/privacy-statement' element={<PrivacyStatement />} />
       <Route path='/' element={<Homepage />} />
       <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default RootModule;
