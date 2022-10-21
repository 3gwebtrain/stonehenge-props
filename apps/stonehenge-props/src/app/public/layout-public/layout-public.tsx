import { FormLogin, FormRegister } from '@stonehenge/forms';
import { HeaderPublic } from '@stonehenge/header-public';
import { ModalLogin } from '@stonehenge/modals';
import { RegisterFormProps } from '@stonehenge/prop-types';
import { ReactElement, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { AppDispatch } from '../../storeApp/appStore';
import { loginAdminUser, registerUser } from '../storePublic';
import { HeaderPublicLinkSchema } from './header-link.schema';
import layoutStyle from './layout-public.module.scss';

export function LayoutPublic() {
  const dispatch = useDispatch<AppDispatch>();
  const [modalActive, setModalActive] = useState(false);
  const [newChildren, setnewChildren] = useState<ReactElement | undefined>(undefined);

  const onRegisterSubmit = (values: RegisterFormProps) => {
    dispatch(registerUser(values));
    setModalActive(false);
  };
  const onLoginSubmit = (values: RegisterFormProps) => {
    dispatch(loginAdminUser(values));
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
