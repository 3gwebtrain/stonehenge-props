import { FormRegister } from '@stonehenge/forms';
import { HeaderPublic } from '@stonehenge/header-public';
import { ModalLogin } from '@stonehenge/modals';
import { RegisterFormProps } from '@stonehenge/prop-types';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { HeaderPublicLinkSchema } from './header-link.schema';
import layoutStyle from './layout-public.module.scss';

export function LayoutPublic() {
  const [modalActive, setModalActive] = useState(false);
  const openPop = () => {
    setModalActive(true);
  };
  const closePop = () => {
    setModalActive(false);
  };
  const onRegisterSubmit = (values: RegisterFormProps) => {
    console.log('form value', values);
  };
  return (
    <section className={layoutStyle['app-wrapper']}>
      <header className="app-header">
        <ModalLogin isModal={modalActive} closePop={closePop} children={<FormRegister closePop={closePop} registerSubmit={onRegisterSubmit} />} />
        <HeaderPublic schema={HeaderPublicLinkSchema} />
      </header>
      <main className="app-main">
        <h1>Hi {modalActive}</h1>
        <Outlet context={openPop} />
      </main>
      <footer className="app-footer"></footer>
    </section>
  );
}

export default LayoutPublic;
