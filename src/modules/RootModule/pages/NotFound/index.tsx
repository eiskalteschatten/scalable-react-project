import React from 'react';

import usePageTitle from '../../../../shared/hooks/usePageTitle';
import PageHeader from '../../../../shared/components/PageHeader';

import styles from './NotFound.module.scss';

const NotFound: React.FC = () => {
  // The 404 page

  usePageTitle('Page not found!');

  return (
    <div className={styles.notFound}>
      <PageHeader>
        404
      </PageHeader>

      The page you are looking for could not be found.
    </div>
  );
}

export default NotFound;
