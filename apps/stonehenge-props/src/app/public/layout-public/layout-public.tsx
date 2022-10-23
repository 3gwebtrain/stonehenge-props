import { FormLogin, FormRegister } from '@stonehenge/forms';
import { HeaderPublic } from '@stonehenge/header-public';
import { ModalLogin } from '@stonehenge/modals';
import { RegisterFormProps, UserLoginProps } from '@stonehenge/prop-types';
import axios, { AxiosError } from 'axios';
import { ReactElement, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { environment } from '../../../environments/environment';
import { AppDispatch } from '../../storeApp/appStore';
import { hideAlert, registerUser, showAlert } from '../storePublic';
import { HeaderPublicLinkSchema } from './header-link.schema';
import layoutStyle from './layout-public.module.scss';

export function LayoutPublic() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [modalActive, setModalActive] = useState(false);
  const [newChildren, setnewChildren] = useState<ReactElement | undefined>(undefined);

  const onRegisterSubmit = (values: RegisterFormProps) => {
    console.log('on public', values);
    dispatch(registerUser(values));
    setModalActive(false);
  };
  const onLoginSubmit = async (values: UserLoginProps) => {
    setModalActive(false);
    try {
      dispatch(showAlert());
      const response = await axios.post(environment.BASE_URL + '/user/admin-login', values);
      dispatch(hideAlert());
      if (response.data.success) {
        toast.success(response.data.message);
        toast('Redirecting to Home page');
        localStorage.setItem('token', response.data.data);
        navigate('/admin/home');
      } else {
        toast.error(response.data.message);
      }
    } catch (error: unknown) {
      dispatch(showAlert());
      const err = error as AxiosError;
      throw new Error(err.message);
    }
  };

  const openPop = (temp: string) => {
    if (temp === 'register') {
      setnewChildren(<FormRegister closePop={closePop} registerSubmit={onRegisterSubmit} />);
    }
    if (temp === 'login') {
      setnewChildren(<FormLogin closePop={closePop} registerSubmit={onLoginSubmit} />);
    }
    setModalActive(true);
  };
  const closePop = () => {
    setModalActive(false);
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} containerStyle={{ fontSize: '14px' }}></Toaster>
      <section className={layoutStyle['app-wrapper']}>
        <header className="app-header">
          {newChildren && <ModalLogin isModal={modalActive} closePop={closePop} children={newChildren} />}
          <HeaderPublic openPop={openPop} schema={HeaderPublicLinkSchema} />
        </header>
        <main className="app-main">
          <h1>Hi {modalActive}</h1>
          <Outlet context={openPop} />
        </main>
        <footer className="app-footer"></footer>
      </section>
    </>
  );
}

export default LayoutPublic;
