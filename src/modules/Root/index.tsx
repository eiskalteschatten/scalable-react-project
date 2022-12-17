import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Homepage from './Homepage';

const RootModule: React.FC = () => {
  // The RootModule is responsible for everything that happens at the root levels and all of its content.
  // It is responsible for the home page (located at "/") as well as the 404 page.
  // It also controls the routes for all of its components.
  // In thie particular example, we only have one component, so we only need one route.

  return (
    <Routes>
       <Route path='/' element={<Homepage />} />

       {/* TODO */}
       <Route path='*' element={<div>404</div>} />
    </Routes>
  );
}

export default RootModule;
