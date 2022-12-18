import { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';

import usePostsModuleContext from 'modules/PostsModule/hooks/usePostModuleContext';
import { Post } from 'modules/PostsModule/interfaces/posts';

// This is an example of a service. Services should come in the form of a hook so that
// they have access to the context and other hooks.
// This particular one doesn't return any values, but it is certainly possible to do so.

const useService = () => {
  const { fetchPosts, posts } = usePostsModuleContext();
  const { slug } = useParams();

  useEffect(() => {
    fetchPosts();
  }, []);

  const post = useMemo<Post | undefined>(() => posts.find(_post => slug === _post.slug), [posts]);

  return {
    post,
  };
};

export default useService;
