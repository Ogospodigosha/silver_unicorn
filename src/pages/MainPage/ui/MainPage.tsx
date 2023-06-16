import React from 'react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { SignUpPage } from 'pages/SignUpPage/ui/SignUpPage';

export const MainPage = () => {
  return (
    <div>
      <div>MAIN PAGE1</div>
      <Button theme={ThemeButton.ClEAR}>Читать</Button>
      <SignUpPage />
    </div>
  );
};
export default MainPage;
