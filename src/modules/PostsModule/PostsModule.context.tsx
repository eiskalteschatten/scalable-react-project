import React, { createContext, PropsWithChildren, useState } from 'react';

import { Post } from './interfaces/posts';

export interface IContext {
  posts: Post[];
  fetchPosts: () => Promise<Post[]>;
}

/* eslint-disable @typescript-eslint/no-unused-vars */
const Context = createContext<IContext>({
  posts: [],
  fetchPosts: () => Promise.resolve([]),
});
/* eslint-enable @typescript-eslint/no-unused-vars */

const PostsModuleContextProviderWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  const [posts, setPosts] = useState<Post[]>([]);

  // This function is a demonstration of how you could fetch data from a backend.
  // Since this demo app doesn't have a backend, it's going to asynchronously import the data
  // from a separate file instead.
  const fetchPosts = async () => {
    const posts = (await import('./posts')).default;
    setPosts(posts);
    return posts;
  };

  return (
    <Context.Provider value={{
      posts,
      fetchPosts,
    }}>
      {children}
    </Context.Provider>
  );
};

export { PostsModuleContextProviderWrapper, Context as AppContext };
