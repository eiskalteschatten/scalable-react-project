import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import RootModule from './modules/Root';

// The App.scss is where global styles should be defined such as body background color, etc.
import './App.scss';

const App: React.FC = () => {
  // The App component is the root of the application.
  // This is where all of the modules should be registered.

  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<RootModule />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
