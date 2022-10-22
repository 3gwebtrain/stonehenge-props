import { FC } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './app.module.scss';
import AdminLogin from './public/admin-login/admin-login';
import AdminRegister from './public/admin-register/admin-register';
import HomePublic from './public/home-public/home-public';
import LayoutPublic from './public/layout-public/layout-public';
import HomeAdmin from './public/private/admin/home/home-admin';
import Protected from './public/private/protected/protected';
import { AppState } from './storeApp/appStore';

export const App: FC = () => {
  const { alert } = useSelector((state: AppState) => state.alertSlice);
  return (
    <BrowserRouter>
      {alert && (
        <div className="spinner-parent">
          <div className="spinner-border" role="status"></div>
        </div>
      )}
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/" element={<LayoutPublic />}>
          <Route path="home" element={<HomePublic />}></Route>
          <Route path="admin-login" element={<AdminLogin />}></Route>
          <Route path="register" element={<AdminRegister />}></Route>
        </Route>
        <Route path="/admin" element={<LayoutPublic />}>
          <Route path="home" element={<Protected children={<HomeAdmin />} />}></Route>
        </Route>
        <Route path="*" element={<Navigate to="/home" replace />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
