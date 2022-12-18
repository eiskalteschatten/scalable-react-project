import React, { useMemo } from 'react';

import useAppContext from 'shared/hooks/useAppContext';

import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  const year = useMemo<number>(() => new Date().getFullYear(), []);

  // This data comes from the global app context
  const { windowWidth, isDarkMode } = useAppContext();

  return (
    <div className={styles.footer}>
      <div>
        Width width: {windowWidth}px
      </div>

      <div>
        Using dark mode: {String(isDarkMode)}
      </div>

      <div className={styles.copyright}>
        &copy; {year} Myself
      </div>
    </div>
  );
};

export default Footer;
