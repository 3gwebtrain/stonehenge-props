import { FC, ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

const Protected: FC<{ children: ReactElement }> = ({ children }) => {
  if (localStorage.getItem('token')) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
};

export default Protected;
