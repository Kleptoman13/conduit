import React, { FC } from 'react';
import Header from './common/components/header/header.component';

interface AppProps {}

const App: FC<AppProps> = () => {
  return (
    <div>
      <Header />
    </div>
  );
};

export default App;