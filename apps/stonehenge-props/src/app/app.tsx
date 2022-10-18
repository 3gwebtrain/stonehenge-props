import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './app.module.scss';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

export const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
