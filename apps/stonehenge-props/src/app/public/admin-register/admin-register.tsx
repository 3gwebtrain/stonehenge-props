import styles from './admin-register.module.scss';

/* eslint-disable-next-line */
export interface AdminRegisterProps {}

export function AdminRegister(props: AdminRegisterProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to AdminRegister!</h1>
    </div>
  );
}

export default AdminRegister;
