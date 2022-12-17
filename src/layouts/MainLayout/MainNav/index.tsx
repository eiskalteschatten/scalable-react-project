import React from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

import styles from './MainNav.module.scss';

const MainNav: React.FC = () => {
  const navClassName = ({ isActive }: { isActive: boolean }) => clsx({
    [styles.activeLink]: isActive,
  });

  return (
    <div className={styles.mainNav}>
      <NavLink to='/' className={navClassName} end>
        Home
      </NavLink>
      <NavLink to='/posts' className={navClassName}>
        Posts
      </NavLink>
      <NavLink to='/privacy-statement' className={navClassName} end>
        Privacy Statement
      </NavLink>
    </div>
  );
}

export default MainNav;
