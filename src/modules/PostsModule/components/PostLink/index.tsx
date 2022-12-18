import React from 'react';
import { NavLink } from 'react-router-dom';

import { Post } from '../../interfaces/posts';

import styles from './PostLink.module.scss';

interface Props {
  post: Post;
}

const PostLink: React.FC<Props> = ({ post }) => {
  return (
    <div className={styles.postLink}>
      <NavLink to={`/posts/${post.slug}`}>
        <h2 className={styles.title}>{post.title}</h2>
      </NavLink>
      <div className={styles.summary}>{post.summary}</div>
    </div>
  );
};

export default PostLink;
