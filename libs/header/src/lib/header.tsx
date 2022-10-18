import styles from './header.module.scss';

export function Header(props: HeaderProps) {
  return (
    <nav className={styles['container']}>
      <h1>Welcome to Header!</h1>
    </nav>
  );
}

export default Header;
