import React from 'react';

import usePageTitle from '../../../../shared/hooks/usePageTitle';
import PageHeader from '../../../../shared/components/PageHeader';

import styles from './AllPosts.module.scss';

const AllPosts: React.FC = () => {
  usePageTitle('Posts');

  return (
    <div className={styles.allPosts}>
      <PageHeader>
        Posts
      </PageHeader>
    </div>
  );
}

export default AllPosts;
