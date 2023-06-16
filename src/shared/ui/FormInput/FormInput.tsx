import React from 'react';
import cls from './FormInput.module.scss';

export const FormInput = (props: any) => {
  return (
    <input className={cls.input} type={props.type}/>
  )
}