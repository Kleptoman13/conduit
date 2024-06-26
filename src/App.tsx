import React, { FC } from 'react';
import Header from './common/components/header/header.component';
import Banner from './common/components/banner/banner.component';
import Feed from './modules/feed/components/feed/feed.component';

interface AppProps {}

const App: FC<AppProps> = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Feed />
    </div>
  );
};

export default App;