import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AppProviderWrapper } from './App.context';
import ErrorBoundary from './shared/components/ErrorBoundry';
import RootModule from './modules/RootModule';
import PostsModule from './modules/PostsModule';

// The App.scss is where global styles should be defined such as body background color, etc.
import './App.scss';

const App: React.FC = () => {
  // The App component is the root of the application.
  // This is where all of the top-level modules should be registered including their root-route.

  return (
    <AppProviderWrapper>
      <ErrorBoundary>
        <BrowserRouter>
          <Routes>
            <Route path='/posts' element={<PostsModule />} />
            <Route path='*' element={<RootModule />} />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </AppProviderWrapper>
  );
}

export default App;
