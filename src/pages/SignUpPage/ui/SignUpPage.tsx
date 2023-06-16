import React, {useState} from 'react';
import cls from './SignUpPage.module.scss';
import { Button, ThemeButton} from 'shared/ui/Button/Button';
import { Link } from 'react-router-dom';
import { CloseButton } from 'shared/ui/CloseButton/CloseButton';
import { FormInput } from 'shared/ui/FormInput/FormInput';
import { CheckBox } from 'shared/ui/CheckBox/CheckBox';

export const SignUpPage = () => {
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
              <Link to='/login' className={cls.button} type='button'>Войти</Link>
              <Link to='/' className={`${cls.button} ${cls.inactive}`}>Регистрация</Link>
            </div>
            <form className={cls.form}>
              <label className={cls.label} htmlFor='login'>Логин</label>
              <FormInput type='text' name='login' id='login'/>
              <label className={cls.label} htmlFor='password'>Пароль</label>
              <FormInput type='password' name='password' id='password'/>
              <label className={cls.label} htmlFor='confirmPassword'>Подтвердите пароль</label>
              <FormInput type='password' name='confirmPassword' id='confirmPassword'/>
              <div className={cls.checkbox}>
                <CheckBox />
              </div>
              <Button className={cls.submitButton} theme={ThemeButton.ClEAR} type='submit'>Войти</Button>
              <Link to='/login' className={cls.link}>Есть аккаунт? <span>Войти</span></Link>
            </form>
          </div>
      </div>
    }
    </div>
  )
}