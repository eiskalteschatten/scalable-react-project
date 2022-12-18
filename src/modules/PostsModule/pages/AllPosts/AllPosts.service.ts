import { useEffect } from 'react';

import usePostsModuleContext from 'modules/PostsModule/hooks/usePostModuleContext';

// This is an example of a service. Services should come in the form of a hook so that
// they have access to the context and other hooks.
// This particular one doesn't return any values, but it is certainly possible to do so.

const useService = () => {
  const { fetchPosts } = usePostsModuleContext();

  useEffect(() => {
    fetchPosts();
  }, []);
};

export default useService;
