import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import FavoriteButton from '../favorite-button/favorite-button.components';
import TagList from '../tag-list/tag-list.component';
import { FeedArticle } from '../../api/dto/global-feed.in';
import { DateTime } from 'luxon';

export interface ArticleProps extends FeedArticle {}

const Article: FC<ArticleProps> = ({ author, createdAt, favoritesCount, title, description, tagList }) => {
  return (
    <article>
        <div className='border-t border-black/10 py-6'>
            <div className='mb-4 font-light flex justify-between'>
                <div className='flex'>
                    <Link to={`/@${author.username}`}>
                        <img 
                            src={author.image}
                            alt={`${author.username} avatar`}
                            className='inline-block h-8 w-8 rounded-full'
                        />
                    </Link>
                    <div className='mr-6 ml-0.3 leading-4 inline-flex flex-col'>
                        <Link to={`/@${author.username}`} className='font-medium'>{author.username}</Link>
                        <span className='text-conduit-gray text-date'>{DateTime.fromISO(createdAt).toLocaleString(DateTime.DATE_FULL)}</span>
                    </div>
                </div>
                <FavoriteButton count={favoritesCount} />
            </div>
            <Link className='hover:no-underline' to='/article/qwert'>
                <h1 className='mb-1 font-semibold text-2xl text-conduit-darkestGray'>{title}</h1>
                <p className='text-conduit-darkenGray font-light mb-1'>{description}</p>
                <div className='flex justify-between'>
                    <span className='text-conduit-gray text-date font-light'>Read more...</span>
                    <TagList list={tagList} />
                </div>
            </Link>
        </div>
    </article>
  );
};

export default Article;