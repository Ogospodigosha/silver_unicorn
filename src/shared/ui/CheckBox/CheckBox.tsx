import React from 'react';
import cls from './CheckBox.module.scss';

export const CheckBox = (props: any) => {
  return (
    <label className={cls.label}>
      <input className={`${cls.input} ${cls.hidden}`} type="checkbox" name="remember" />
      <span className={cls.inputMark}></span>
      Запомнить меня
    </label>
  )
}