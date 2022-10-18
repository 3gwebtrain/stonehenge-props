import styles from './admin-login.module.scss';

/* eslint-disable-next-line */
export interface AdminLoginProps {}

export function AdminLogin(props: AdminLoginProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to AdminLogin!</h1>
    </div>
  );
}

export default AdminLogin;
