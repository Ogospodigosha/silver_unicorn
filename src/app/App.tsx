import React from 'react';
import './styles/index.scss';
import { Link } from 'react-router-dom';
import { AppRouter } from 'app/providers/router';

export const App = () => {
  return (
    <div className={'app'}>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <AppRouter />
    </div>
  );
};
