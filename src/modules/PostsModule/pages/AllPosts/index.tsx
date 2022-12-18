import React from 'react';

import usePageTitle from 'shared/hooks/usePageTitle';
import usePostsModuleContext from 'modules/PostsModule/hooks/usePostModuleContext';
import PageHeader from 'shared/components/PageHeader';
import PostLink from 'modules/PostsModule/components/PostLink';
import useService from './AllPosts.service';

import styles from './AllPosts.module.scss';

const AllPosts: React.FC = () => {
  usePageTitle('Posts');
  useService();
  const { posts } = usePostsModuleContext();

  return (
    <div className={styles.allPosts}>
      <PageHeader>
        Posts
      </PageHeader>

      {posts.map((post, index) => (
        <PostLink
          key={index}
          post={post}
        />
      ))}
    </div>
  );
};

export default AllPosts;
