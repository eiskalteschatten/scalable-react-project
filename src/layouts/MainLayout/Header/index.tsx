import React from 'react';

import MainNav from '../MainNav';

import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.appName}>
        Awesome App
      </div>

      <MainNav />
    </div>
  );
};

export default Header;
