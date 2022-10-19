import { Button } from 'antd';
import { FC, useState } from 'react';
import LayoutPublic from '../layout-public/layout-public';
import './home-public.scss';

const HomePublic: FC = () => {
  const [signInInit, setSignInInit] = useState<boolean>(false)
  const initSignIn = () => {
    console.log('init sing in');
    setSignInInit(true)
  };

  return (
    <LayoutPublic parSignInInit={signInInit}>
      <div>
        <h1>Welcome to HomePublic!</h1>
        <Button onClick={() => initSignIn()}>SignIn</Button>
      </div>
    </LayoutPublic>
  );
};

export default HomePublic;
