import React from 'react';

import usePageTitle from 'shared/hooks/usePageTitle';
import PageHeader from 'shared/components/PageHeader';
import useService from './Post.service';

import styles from './Post.module.scss';

const Post: React.FC = () => {
  const { post } = useService();
  usePageTitle(post?.title ?? 'Post Not Found');

  if (!post) {
    return (
      <div>
        This post could not be found!
      </div>
    );
  }

  return (
    <div className={styles.post}>
      <PageHeader>
        {post.title}
      </PageHeader>

      <p>By {post.author}</p>

      <p>{post.body}</p>
    </div>
  );
};

export default Post;
