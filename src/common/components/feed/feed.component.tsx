import React, { FC } from 'react';
import Container from '../container/container.component';
import ArticleList from '../article-list/article-list.component';

export interface FeedProps {}

const Feed: FC<FeedProps> = () => {
  return (
    <Container >
        <div className='flex'>
            <ArticleList />
            <div className='w-1/4'>tags</div>
        </div>
    </Container>
  );
};

export default Feed;