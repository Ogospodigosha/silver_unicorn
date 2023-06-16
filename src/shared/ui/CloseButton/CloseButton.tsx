import React from 'react';
import cls from './CloseButton.module.scss';

export const CloseButton = (props: any) => {
  return (
    // eslint-disable-next-line react/prop-types
    <button className={cls.closeButton} type="button" onClick={props.onClick}>
      <span className={cls.closeButtonLine}></span>
    </button>
  )
}