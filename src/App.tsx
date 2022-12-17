import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import RootModule from './modules/RootModule';
import ErrorBoundary from './shared/compoonents/ErrorBoundry';

// The App.scss is where global styles should be defined such as body background color, etc.
import './App.scss';

const App: React.FC = () => {
  // The App component is the root of the application.
  // This is where all of the top-level modules should be registered including their root-route.

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<RootModule />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
