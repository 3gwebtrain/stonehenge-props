import { Button } from 'antd';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import './home-public.scss';

const HomePublic: FC = () => {
  const navigate = useNavigate();

  const newNavigate = () => {
    navigate('/admin/home');
  };
  return (
    <div>
      <h1>Welcome to HomePublic!</h1>
      <Button onClick={() => newNavigate()}>SignIn</Button>
    </div>
  );
};

export default HomePublic;
