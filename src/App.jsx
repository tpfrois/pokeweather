import React from 'react';

import GlobalStyle from './styles/global';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;
