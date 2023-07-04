import React from 'react';
import './styles/index.scss';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { CardItem } from 'widgets/CardItem';
import { Autorization } from 'widgets/ModalAutorization';
export const App = () => {
  return (
    <div className={'app'}>
      <Navbar />
      <CardItem />
      <Autorization />
      <AppRouter />
    </div>
  );
};
