import React from 'react';

import usePageTitle from '../../../../shared/hooks/usePageTitle';
import PageHeader from '../../../../shared/components/PageHeader';

import styles from './Homepage.module.scss';

const Homepage: React.FC = () => {
  // The Homepage

  usePageTitle();

  return (
    <div className={styles.homepage}>
      <PageHeader>
        Home
      </PageHeader>
    </div>
  );
}

export default Homepage;
