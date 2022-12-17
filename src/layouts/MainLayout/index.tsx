import React, { PropsWithChildren } from 'react';

import Header from './Header';

import styles from './MainLayout.module.scss';

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  // The main layout for the application

  return (
    <div>
      <Header />

      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
}

export default MainLayout;
