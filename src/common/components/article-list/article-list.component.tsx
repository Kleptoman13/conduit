import React, { FC } from 'react';
import Article from '../../../modules/feed/components/article/article.component';
import Container from '../container/container.component';

export interface ArticleListProps {}

const ArticleList: FC<ArticleListProps> = () => {
  return (
    <div className='w-3/4'>
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
    </div>
  );
};

export default ArticleList;