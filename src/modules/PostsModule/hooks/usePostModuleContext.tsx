import { useContext } from 'react';

import { PostsModuleContext, IContext } from '../PostsModule.context';

export const usePostsModuleContext = () => useContext<IContext>(PostsModuleContext);

export default usePostsModuleContext;
