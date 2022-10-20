import { Button } from 'antd';
import { FC } from 'react';
import './home-public.scss';

const HomePublic: FC = () => {
  return (
    <div>
      <h1>Welcome to HomePublic!</h1>
      <Button onClick={() => null}>SignIn</Button>
    </div>
  );
};

export default HomePublic;
