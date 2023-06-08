import React from 'react';
import { classNames } from 'shared/lib/classNames/ClassNames';
import cls from './Sidebar.module.scss';
import { CatalogAccordion } from 'shared/ui/Accordion/Accordion'

interface SidebarProps {
  className?: string;
}
export const Sidebar = ({ className }: SidebarProps) => {
  return <div className={classNames(cls.Sidebar, {}, [className])}>
    <CatalogAccordion />
  </div>;
};
