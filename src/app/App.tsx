import React from 'react';
import './styles/index.scss';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/navbar';

export const App = () => {
  return (
    <div className={'app'}>
      <Navbar />
      <AppRouter />
    </div>
  );
};
