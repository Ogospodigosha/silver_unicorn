import React, {useState} from 'react';
import cls from './LogInPage.module.scss';
import { Button, ThemeButton} from 'shared/ui/Button/Button';
import { Link } from 'react-router-dom';
import { CloseButton } from 'shared/ui/CloseButton/CloseButton';
import { FormInput } from 'shared/ui/FormInput/FormInput';
import { CheckBox } from 'shared/ui/CheckBox/CheckBox';

export const LogInPage = () => {
const [show, setShow] = useState(true);

  return (
    <div>
    {
      show && 
      <div className={cls.container}>
          <div className={cls.wrapper}>
            <div className={cls.closeButton}>
              <CloseButton onClick={() => {setShow(false)}} />
            </div>
            <div className={cls.buttonsWrapper}>
              <Link to='/' className={`${cls.button} ${cls.inactive}`} type='button'>Войти</Link>
              <Link to='/signup' className={cls.button}>Регистрация</Link>
            </div>
            <form className={cls.form}>
              <label className={cls.label} htmlFor='login'>Логин</label>
              <FormInput type='text' name='login' id='login'/>
              <label className={cls.label} htmlFor='password'>Пароль</label>
              <FormInput type='password' name='password' id='password'/>
              <div className={cls.checkbox}>
                <CheckBox />
              </div>
              <Button className={cls.submitButton} theme={ThemeButton.ClEAR} type='submit'>Войти</Button>
              <a className={cls.link} href='#'>Забыли пароль? <span>Восстановить</span></a>
            </form>
          </div>
      </div>
    }
    </div>
  )
}