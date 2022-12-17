import React from 'react';

import { Post } from '../../interfaces/posts';

import styles from './PostLink.module.scss';

interface Props {
  post: Post;
}

const PostLink: React.FC<Props> = ({ post }) => {
  return (
    <div className={styles.postLink}>
      <h2 className={styles.title}>{post.title}</h2>
      <div className={styles.summary}>{post.summary}</div>
    </div>
  );
}

export default PostLink;
