import React, { useMemo } from 'react';

import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  const year = useMemo<number>(() => new Date().getFullYear(), []);

  return (
    <div className={styles.footer}>
      &copy; {year} Myself
    </div>
  );
}

export default Footer;
