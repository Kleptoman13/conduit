import React, { FC } from 'react';
import Article from '../article/article.component';

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