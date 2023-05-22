import React from 'react';
import './index.scss';
import { Link, Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';

export const App = () => {
  return (
    <div className={'app'}>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <Suspense fallback={<div>loading</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPage />} />
          <Route path={'/'} element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
