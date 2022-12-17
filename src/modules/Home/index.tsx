import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Homepage from './Homepage';

const HomeModule: React.FC = () => {
  // The HomeModule is responsible for the home page and all of its content.
  // It also controls the routes for all of its components.
  // In thie particular example, we only have one component, so we only need one route.

  return (
    <Routes>
       <Route path='*' element={<Homepage />} />
    </Routes>
  );
}

export default HomeModule;
