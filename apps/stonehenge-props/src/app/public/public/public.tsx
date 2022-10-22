import { FC, ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

const Public: FC<{ children: ReactElement }> = ({ children }) => {
  if (localStorage.getItem('token')) {
    return <Navigate to="/admin/home" />;
  }
  return children;
};

export default Public;
