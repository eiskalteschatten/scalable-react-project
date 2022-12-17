import React from 'react';

import usePageTitle from 'shared/hooks/usePageTitle';
import PageHeader from 'shared/components/PageHeader';

import styles from './PostLink.module.scss';

const PostLink: React.FC = () => {
  usePageTitle('Posts');

  return (
    <div className={styles.postLink}>
      <PageHeader>
        Posts
      </PageHeader>


    </div>
  );
}

export default PostLink;
