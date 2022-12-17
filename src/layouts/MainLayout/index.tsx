import React, { PropsWithChildren } from 'react';

import Header from './Header';
import Footer from './Footer';

import styles from './MainLayout.module.scss';

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  // The main layout for the application

  return (
    <>
      <Header />

      <main className={styles.main}>
        {children}
      </main>

      <Footer />
    </>
  );
}

export default MainLayout;
