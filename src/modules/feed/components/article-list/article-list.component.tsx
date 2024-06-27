import React, { FC } from 'react';
import Article from '../article/article.component';
import { FeedArticle } from '../../api/dto/global-feed.in';

export interface ArticleListProps {
  list: FeedArticle[];
}

const ArticleList: FC<ArticleListProps> = ({ list }) => {
  return (
    <div className='w-3/4'>
        {list.map((article) => (
          <Article key={article.slug} {...article} />
        ))}
    </div>
  );
};

export default ArticleList;