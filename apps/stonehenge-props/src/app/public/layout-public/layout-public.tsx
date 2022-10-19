import { FormRegister } from '@stonehenge/forms';
import { HeaderPublic } from '@stonehenge/header-public';
import { ModalLogin } from '@stonehenge/modals';
import { ReactElement, useEffect, useState } from 'react';
import { HeaderPublicLinkSchema } from './header-link.schema';
import layoutStyle from './layout-public.module.scss';

export function LayoutPublic({
  children,
  parSignInInit,
}: {
  children: ReactElement;
  parSignInInit: boolean;
}) {
  const [modalActive, setModalActive] = useState<boolean>(false);

  useEffect(() => {
    setModalActive(parSignInInit);
  }, [parSignInInit]);
  const submitRegisterForm = () => {
    setModalActive(false);
    console.log(parSignInInit);
  };
  const popupInit = () => {
    console.log('hi from parent');
  };

  const openRegisterPop = () => {
    setModalActive(true);
  };

  return (
    <section className={layoutStyle['app-wrapper']}>
      <header className="app-header">
        <ModalLogin
          modalActive={modalActive}
          children={<FormRegister onSubmit={submitRegisterForm} />}
        />
        <HeaderPublic schema={HeaderPublicLinkSchema} popInit={popupInit} />
      </header>
      <main className="app-main">{children}</main>
      <footer className="app-footer"></footer>
    </section>
  );
}

export default LayoutPublic;
