import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { PostsModuleContextProviderWrapper } from './PostsModule.context';
import MainLayout from '../../layouts/MainLayout';
import AllPosts from './pages/AllPosts';
import Post from './pages/Post';

const PostsModule: React.FC = () => {
  // The PostsModule is responsible for everything that happens at the root levels and all of its content.
  // It is responsible for the home page (located at "/posts") as defined in the App.tsx

  return (
    <PostsModuleContextProviderWrapper>
      <MainLayout>
        <Routes>
          <Route path=':slug' element={<Post />} />
          <Route path='/' element={<AllPosts />} />
        </Routes>
      </MainLayout>
    </PostsModuleContextProviderWrapper>
  );
};

export default PostsModule;
