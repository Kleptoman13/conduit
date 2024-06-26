import React, { FC } from 'react';
import Container from '../../../../common/components/container/container.component';
import ArticleList from '../article-list/article-list.component';
import FeedToggle from '../feed-toggle/feed-toggle.components';

export interface FeedProps {}

const Feed: FC<FeedProps> = () => {
  return (
    <Container >
        <FeedToggle />
        <div className='flex'>
            <ArticleList />
            <div className='w-1/4'>tags</div>
        </div>
    </Container>
  );
};

export default Feed;