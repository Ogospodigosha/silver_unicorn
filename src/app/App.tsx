import React from 'react';
import './styles/index.scss';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { CardItem } from 'widgets/CardItem';
export const App = () => {
  return (
    <div className={'app'}>
      <Navbar />
      <CardItem />
      <AppRouter />
    </div>
  );
};
