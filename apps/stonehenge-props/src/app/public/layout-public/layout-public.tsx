import { HeaderPublic } from '@stonehenge/header-public';
import { ReactElement } from 'react';
import { HeaderPublicLinkSchema } from './header-link.schema';
import layoutStyle from './layout-public.module.scss';

export function LayoutPublic({ children }: { children: ReactElement }) {
  const popupInit = () => {
    console.log('hi from parent');
  };

  return (
    <section className={layoutStyle['app-wrapper']}>
      <header className="app-header">
        <HeaderPublic schema={HeaderPublicLinkSchema} popInit={popupInit} />
      </header>
      <main className="app-main">{children}</main>
      <footer className="app-footer"></footer>
    </section>
  );
}

export default LayoutPublic;
