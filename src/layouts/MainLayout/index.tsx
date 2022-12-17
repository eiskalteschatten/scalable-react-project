import React, { PropsWithChildren } from 'react';

import './MainLayout.module.scss';

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  // The main layout for the application

  return (
    <div>
      {children}
    </div>
  );
}

export default MainLayout;
