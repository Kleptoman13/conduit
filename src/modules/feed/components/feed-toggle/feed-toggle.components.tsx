import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

export interface FeedToggleProps {}

const FeedToggle: FC<FeedToggleProps> = () => {
  return (
    <div className='h-8'>
      <ul className='flex'>
        <li>
            <NavLink className="bg-white border-b-2 border-conduit-green py-2 px-4" to='/'>Global Feed</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default FeedToggle;