import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/ClassNames';
import cls from './CardItem.module.scss';


interface CardItem {
  className?: string;
}

export const CardItem: FC<CardItem> = ({ className }) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
        
    </div>
  );
};
