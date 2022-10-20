import { FC } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './app.module.scss';
import AdminLogin from './public/admin-login/admin-login';
import AdminRegister from './public/admin-register/admin-register';
import HomePublic from './public/home-public/home-public';
import LayoutPublic from './public/layout-public/layout-public';
import Store from './storeApp/appStore';

export const App: FC = () => {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/" element={<LayoutPublic />}>
            <Route path="home" element={<HomePublic />}></Route>
            <Route path="admin-login" element={<AdminLogin />}></Route>
            <Route path="register" element={<AdminRegister />}></Route>
          </Route>
          <Route path="*" element={<Navigate to="/home" replace />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
