import React from 'react';
import './styles/index.scss';
import { Link, Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';

export const App = () => {
  return (
    <div className={'app'}>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <Suspense fallback={<div>loading</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPageAsync />} />
          <Route path={'/'} element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};
